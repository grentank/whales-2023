import React from 'react';
import { Col, Row } from 'react-bootstrap';
import type { DeleteHandlerType, QuoteType } from '../types/quote';
import QuoteCard from './QuoteCard';

type QuoteListProps = {
  quotes: QuoteType[];
  deleteHandler: DeleteHandlerType;
};

export default function QuoteList({ quotes, deleteHandler }: QuoteListProps): JSX.Element {
  return (
    <Row>
      {quotes.map((quote) => (
        <Col key={quote.id} xs={6}>
          <QuoteCard quote={quote} deleteHandler={deleteHandler} />
        </Col>
      ))}
    </Row>
  );
}
