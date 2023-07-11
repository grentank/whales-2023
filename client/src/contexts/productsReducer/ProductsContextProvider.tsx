import React, { useCallback, useEffect, useMemo, useReducer } from 'react';
import axios from 'axios';
import { ProductHandlersDispatchContext, ProductsReducerContext } from './contexts';
import productsReducer from './productsReducer';
import type { ProductType } from '../../types/product';
import type { AddProductHandlerType } from '../../types/productHandlers';

type ProductsContextProviderProps = {
  children: JSX.Element;
};

export default function ProductsContextProvider({
  children,
}: ProductsContextProviderProps): JSX.Element {
  const [store, dispatch] = useReducer(productsReducer, []);

  useEffect(() => {
    axios<ProductType[]>('/products')
      .then((res) => dispatch({ type: 'SET_PRODUCTS', payload: res.data }))
      .catch(console.log);
  }, []);

  const deleteHandler = useCallback((id: ProductType['id']): void => {
    axios
      .delete(`/products/${id}`)
      .then(() => dispatch({ type: 'DELETE_PRODUCT', payload: id }))
      .catch(console.log);
  }, []);

  const addProductHandler: AddProductHandlerType = useCallback(async (formData) => {
    const productForm = new FormData();
    productForm.append('title', formData.title);
    productForm.append('description', formData.description);
    productForm.append('price', formData.price);
    productForm.append('img', formData.img as Blob);
    axios
      .post<ProductType>('/products', productForm, {
        headers: {
          enctype: 'multipart/form-data',
        },
      })
      .then((res) => dispatch({ type: 'ADD_PRODUCT', payload: res.data }))
      .catch(console.log);
  }, []);

  const handlersStore = useMemo(() => ({ addProductHandler, deleteHandler }), []);
  return (
    <ProductsReducerContext.Provider value={store}>
      <ProductHandlersDispatchContext.Provider value={handlersStore}>
        {children}
      </ProductHandlersDispatchContext.Provider>
    </ProductsReducerContext.Provider>
  );
}
