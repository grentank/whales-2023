import type { ProductType } from '../product';
import type { AddProductHandlerType } from '../productHandlers';

export type ProductAcitonsType =
  | { type: 'SET_PRODUCTS'; payload: ProductType[] }
  | { type: 'ADD_PRODUCT'; payload: ProductType }
  | {
      type: 'DELETE_ALL_PRODUCTS';
    }
  | { type: 'DELETE_PRODUCT'; payload: ProductType['id'] };

export type ProductStateContextType = ProductType[];

export type ProductHandlersDispatchContextType = {
  addProductHandler: AddProductHandlerType;
  deleteHandler: (id: ProductType['id']) => void;
};
