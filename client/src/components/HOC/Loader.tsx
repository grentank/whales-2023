import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { UserContext } from '../../contexts/user/userContext';

type LoaderProps = {
  children: JSX.Element;
};

export default function Loader({ children }: LoaderProps): JSX.Element {
  const { status } = useContext(UserContext);
  if (status === 'loading')
    return <Spinner animation="grow" style={{ width: '300px', height: '300px' }} />;
  return children;
}
