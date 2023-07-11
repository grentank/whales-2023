import { createContext, useContext } from 'react';
import type { ProductHandlersContextType } from '../../types/contexts/productContext';

const ProductHandlersContext = createContext<ProductHandlersContextType | null>(null);

export const useProductHandlersContext = (): ProductHandlersContextType => {
  const context = useContext(ProductHandlersContext);
  if (!context) throw new Error('Error with product handlers context');

  return context;
};

export default ProductHandlersContext;
