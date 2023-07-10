import React, { useMemo } from 'react';
import { Col, Row } from 'react-bootstrap';
import type { ProductType } from '../../types/product';
import ProductCard from './ProductCard';

type ProductListProps = {
  products: ProductType[];
  deleteHandler: (id: number) => void;
};

export default function ProductList({ products, deleteHandler }: ProductListProps): JSX.Element {
  const arr: never[] = useMemo(() => ['my data'], []);
  return (
    <Row>
      {products.map((product) => (
        <Col key={product.id} xs={4}>
          <ProductCard product={product} deleteHandler={deleteHandler} arr={arr} />
        </Col>
      ))}
    </Row>
  );
}
