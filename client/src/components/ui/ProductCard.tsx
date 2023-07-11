import React, { memo } from 'react';
import { Button, Card } from 'react-bootstrap';
import type { ProductType } from '../../types/product';
import { useProductHandlersContext } from '../../contexts/product/handlersContext';
import { useProductsHandlersDispatchContext } from '../../contexts/productsReducer/contexts';

type ProductCardProps = {
  product: ProductType;
  // deleteHandler: (id: number) => void;
  // arr: never[];
};

function ProductCard({ product }: ProductCardProps): JSX.Element {
  console.log('render');
  // const { deleteHandler } = useProductHandlersContext();
  const { deleteHandler } = useProductsHandlersDispatchContext();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={
          product.img.includes('http') ? product.img : `http://localhost:3000/img/${product.img}` // process.env.IMAGES_BASE_URL
        }
      />
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
