import { useState, useEffect, useRef } from "react";
import { Product, onChangeArgs, InitialValues } from "../interfaces/interfaces";

interface useProductArgs {
  initialValue?: InitialValues;
  onChange?: (args: onChangeArgs) => void;
  product: Product;
  value?: number;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValue,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValue?.count || value);

  const isMounted = useRef(false);

  const increaseBy = (value: number): void => {
    //mi solucion
    // const newValue =
    //   Math.max(counter + value, 0) &&
    //   Math.min(counter + value, initialValue?.maxCount || 10);

    //solucion Fernando Herrera
    let newValue = Math.max(counter + value, 0);

    if (initialValue?.maxCount) {
      newValue = Math.min(newValue, initialValue.maxCount);
    }

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValue?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
    maxCount: initialValue?.maxCount,
    isMaxCountReached:
      !!initialValue?.maxCount && counter === initialValue?.maxCount,
    reset,
  };
};
