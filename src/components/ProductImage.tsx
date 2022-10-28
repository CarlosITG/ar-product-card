import React, { useContext, CSSProperties } from 'react';

import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  img?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  let imgToshow: string;

  if (img) {
    imgToshow = img;
  } else if (product.img) {
    imgToshow = product.img;
  } else {
    imgToshow = noImage;
  }

  return (
    <img
      src={imgToshow}
      alt="product image"
      className={`${styles.productImg} ${className}`}
      style={style}
    />
  );
};
