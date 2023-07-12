import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useUserHandlers } from '../../../contexts/user/userContext';

const initState = {
  email: '',
  password: '',
};

export default function LoginPage(): JSX.Element {
  const { loginHandler } = useUserHandlers();
  const [inputs, setInputs] = useState(initState);
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        void loginHandler(inputs);
        setInputs(initState);
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={changeHandler}
          value={inputs.email}
          name="email"
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">Mock emails are 1@1, 2@2, 3@3</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={changeHandler}
          value={inputs.password}
          name="password"
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
