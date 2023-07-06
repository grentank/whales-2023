import React from 'react';
import { Button, Card } from 'react-bootstrap';
import type { DeleteHandlerType, QuoteType } from '../types/quote';

type QuoteCardProps = {
  quote: QuoteType;
  deleteHandler: DeleteHandlerType;
};

export default function QuoteCard({ quote, deleteHandler }: QuoteCardProps): JSX.Element {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={quote.image} />
      <Card.Body>
        <Card.Title>{quote.character}</Card.Title>
        <Card.Text>{quote.quote}</Card.Text>
        <Button variant="danger" onClick={() => deleteHandler(String(quote.id))}>
          X
        </Button>
      </Card.Body>
    </Card>
  );
}
