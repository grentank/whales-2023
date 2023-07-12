import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useUserHandlers } from '../../../contexts/user/userContext';

export default function SignUpPage(): JSX.Element {
  const { signupHandler } = useUserHandlers();

  return (
    <Form onSubmit={signupHandler}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" />
        <Form.Text className="text-muted">Mock emails are 1@1, 2@2, 3@3</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
