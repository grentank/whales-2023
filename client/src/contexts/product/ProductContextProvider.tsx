import React, { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import ProductContext from './productContext';
import ProductHandlersContext from './handlersContext';
import type { ProductType } from '../../types/product';
import type { AddProductHandlerType } from '../../types/productHandlers';

type ProductContextProviderProps = {
  children: JSX.Element;
};

export default function ProductContextProvider({
  children,
}: ProductContextProviderProps): JSX.Element {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    axios<ProductType[]>('/products')
      .then((res) => setProducts(res.data))
      .catch(console.log);
  }, []);

  const deleteHandler = useCallback((id: ProductType['id']): void => {
    axios
      .delete(`/products/${id}`)
      .then(() => setProducts((prev) => prev.filter((product) => product.id !== id)))
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
      .then((res) => setProducts((prev) => [res.data, ...prev]))
      .catch(console.log);
  }, []);

  const handlersStore = useMemo(() => ({ addProductHandler, deleteHandler }), []);

  return (
    <ProductContext.Provider value={products}>
      <ProductHandlersContext.Provider value={handlersStore}>{children}</ProductHandlersContext.Provider>
    </ProductContext.Provider>
  );
}
