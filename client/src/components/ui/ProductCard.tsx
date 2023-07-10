import React, { memo } from 'react';
import { Button, Card } from 'react-bootstrap';
import type { ProductType } from '../../types/product';

type ProductCardProps = {
  product: ProductType;
  deleteHandler: (id: number) => void;
  arr: never[];
};

function ProductCard({ product, deleteHandler, arr }: ProductCardProps): JSX.Element {
  console.log('render');
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price / 100} EUR</Card.Text>
        <Button variant="danger" onClick={() => deleteHandler(product.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default memo(ProductCard); // HOC, higher order component
