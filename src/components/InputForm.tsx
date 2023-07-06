import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import SendIcon from './SendIcon';
import type { SubmitFormType } from '../types/quote';

type InputFormProps = {
  submitHandler: SubmitFormType;
};

export default function InputForm({ submitHandler }: InputFormProps): JSX.Element {
  return (
    <Form onSubmit={(e) => void submitHandler(e)}>
      <InputGroup className="mb-3">
        <Form.Control
          name="amount"
          placeholder="Сколько карточек"
          aria-label="Сколько карточек"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">
          <Button type="submit">
            <SendIcon />
          </Button>
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
}
