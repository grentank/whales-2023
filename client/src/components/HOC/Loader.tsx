import React from 'react';
import { Spinner } from 'react-bootstrap';

type LoaderProps = {
  children: JSX.Element;
  isLoading: boolean;
};

export default function Loader({ children, isLoading }: LoaderProps): JSX.Element {
  if (isLoading) return <Spinner animation="grow" />;
  return children;
}
