import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddProductForm from './ui/AddProductForm';
import ProductList from './ui/ProductList';

export default function ProductsPage(): JSX.Element {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <AddProductForm />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
}
