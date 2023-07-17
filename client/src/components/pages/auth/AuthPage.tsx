import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useAppDispatch } from '../../../features/redux/hooks';
import type { LoginForm } from '../../../types/user/forms';
import { loginUserThunk } from '../../../features/redux/slices/user/thunks';

export default function AuthPage(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = Object.fromEntries(new FormData(e.currentTarget)) as LoginForm;
          void dispatch(loginUserThunk(formData));
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
