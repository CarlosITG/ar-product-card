import React, { createContext, CSSProperties } from 'react';

import { useProduct } from '../hooks/useProduct';
import {
  ProductContextProps,
  onChangeArgs,
  InitialValues,
} from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';
import { Product, ProductCardHandlers } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  onChange?: (args: onChangeArgs) => void;
  product: Product;
  style?: CSSProperties;
  value?: number;
  initialValue?: InitialValues;
}

export const ProductCard = ({
  children,
  className,
  initialValue,
  onChange,
  product,
  style,
  value,
}: Props) => {
  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProduct({ onChange, product, value, initialValue });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        maxCount,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          maxCount: initialValue?.maxCount,
          increaseBy,
          isMaxCountReached,
          product,
          reset,
        })}
      </div>
    </Provider>
  );
};
