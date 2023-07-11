import { createContext, useContext } from 'react';
import type {
  ProductHandlersDispatchContextType,
  ProductStateContextType,
} from '../../types/contexts/productsReducerContext';

const ProductsReducerContext = createContext<ProductStateContextType>([]);

const ProductHandlersDispatchContext = createContext<null | ProductHandlersDispatchContextType>(
  null,
);

const useProductsReducerContext = (): ProductStateContextType => useContext(ProductsReducerContext);

const useProductsHandlersDispatchContext = (): ProductHandlersDispatchContextType => {
  const context = useContext(ProductHandlersDispatchContext);
  if (!context) {
    throw new Error('error with dispatch handlers');
  }
  return context;
};

export {
  ProductsReducerContext,
  ProductHandlersDispatchContext,
  useProductsReducerContext,
  useProductsHandlersDispatchContext,
};
