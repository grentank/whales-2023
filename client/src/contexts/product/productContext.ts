import { createContext, useContext } from 'react';
import type { ProductContextType } from '../../types/contexts/productContext';

const ProductContext = createContext<ProductContextType>([]);

export const useProductContext = (): ProductContextType => useContext(ProductContext);

export default ProductContext;
