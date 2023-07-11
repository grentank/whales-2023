import React from 'react';
import { Container } from 'react-bootstrap';
import MainPage from './components/MainPage';
import NavBar from './components/ui/NavBar';
import ProductsContextProvider from './contexts/productsReducer/ProductsContextProvider';

function App(): JSX.Element {
  return (
    <ProductsContextProvider>
      <Container>
        <NavBar />
        <MainPage />
      </Container>
    </ProductsContextProvider>
  );
}

export default App;
