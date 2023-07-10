import React, { useCallback, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import MainPage from './components/MainPage';
import NavBar from './components/ui/NavBar';
import type { FormProductType, ProductType } from './types/product';
import type { AddProductHandlerType } from './types/productHandlers';

function App(): JSX.Element {
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

  return (
    <Container>
      <NavBar />
      <MainPage products={products} addProductHandler={addProductHandler} deleteHandler={deleteHandler} />
    </Container>
  );
}

export default App;
