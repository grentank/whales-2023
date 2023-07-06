import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';
import InputForm from './components/InputForm';
import QuoteList from './components/QuoteList';
import type { AmountFormType, DeleteHandlerType, QuoteFromApi, QuoteType } from './types/quote';

function App(): JSX.Element {
  const [quotes, setQuotes] = useState<QuoteType[]>([]);

  useEffect(() => {
    axios<QuoteFromApi[]>('https://thesimpsonsquoteapi.glitch.me/quotes?count=5')
      .then((res) => {
        setQuotes(res.data.map((quote) => ({ ...quote, id: crypto.randomUUID() })));
      })
      .catch(console.log);
  }, []);

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.currentTarget)) as AmountFormType;
    const response = await axios<QuoteFromApi[]>(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=${formData.amount}`,
    );
    if (response.status === 200) {
      setQuotes(response.data.map((quote) => ({ ...quote, id: crypto.randomUUID() })));
    }
  };

  // const submitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
  //   event.preventDefault();
  //   const formData = Object.fromEntries(new FormData(event.currentTarget)) as AmountFormType;

  // }

  const deleteHandler: DeleteHandlerType = (id) =>
    setQuotes((prev) => prev.filter((quote) => quote.id !== id));

  return (
    <Container style={{ margin: '3rem' }}>
      <Row>
        <Col>
          <InputForm submitHandler={submitHandler} />
        </Col>
      </Row>
      <Row>
        <Col>
          <QuoteList deleteHandler={deleteHandler} quotes={quotes} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
