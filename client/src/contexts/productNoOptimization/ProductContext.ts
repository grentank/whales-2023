import { createContext, useContext } from 'react';
import type { ProductContextTypeNoOptimization } from '../../types/contexts/productContext';

const ProductContext = createContext<ProductContextTypeNoOptimization | null>(null);

function useProductContextNoOptimization(): ProductContextTypeNoOptimization {
  const context = useContext(ProductContext);
  if (!context) throw new Error('useProductContext must be used within a ProductContextProvider');

  return context;
}

export default ProductContext;

export { useProductContextNoOptimization };
