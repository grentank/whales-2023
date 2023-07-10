import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddProductForm from './ui/AddProductForm';
import ProductList from './ui/ProductList';
import type { ProductType } from '../types/product';
import type { AddProductHandlerType } from '../types/productHandlers';

type MainPageProps = {
  products: ProductType[];
  addProductHandler: AddProductHandlerType;
  deleteHandler: (id: number) => void;
};

export default function MainPage({
  products,
  addProductHandler,
  deleteHandler,
}: MainPageProps): JSX.Element {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <AddProductForm addProductHandler={addProductHandler} />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <ProductList products={products} deleteHandler={deleteHandler} />
        </Col>
      </Row>
    </Container>
  );
}
