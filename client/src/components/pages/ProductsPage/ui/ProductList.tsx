import React, { useMemo } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { useProductsReducerContext } from '../../../../contexts/productsReducer/contexts';

// type ProductListProps = {
//   products: ProductType[];
//   deleteHandler: (id: number) => void;
// };

export default function ProductList(): JSX.Element {
  // const arr: never[] = useMemo(() => ['my data'], []);
  // const products = useProductContext();
  const products = useProductsReducerContext();
  return (
    <Row>
      {products.map((product) => (
        <Col key={product.id} xs={4}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
}
