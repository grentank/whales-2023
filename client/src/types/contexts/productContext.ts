import type { ProductType } from '../product';
import type { AddProductHandlerType } from '../productHandlers';

export type ProductContextTypeNoOptimization = {
  products: ProductType[];
  addProductHandler: AddProductHandlerType;
  deleteHandler: (id: ProductType['id']) => void;
};

export type ProductContextType = ProductType[];

export type ProductHandlersContextType = {
  addProductHandler: AddProductHandlerType;
  deleteHandler: (id: ProductType['id']) => void;
};
