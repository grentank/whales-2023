import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/ui/NavBar';
import ProductsContextProvider from './contexts/productsReducer/ProductsContextProvider';
import LoginPage from './components/pages/LoginPage/LoginPage';
import SignUpPage from './components/pages/SignUpPage/SignUpPage';
import ProductsPage from './components/pages/ProductsPage/ProductsPage';
import MainPage from './components/pages/MainPage/MainPage';
import PrivateRouter from './components/HOC/PrivateRouter';
import { UserContext } from './contexts/user/userContext';

function App(): JSX.Element {
  const { status } = useContext(UserContext);
  if (status === 'loading') return <h1>error</h1>;
  return (
    <ProductsContextProvider>
      <Container>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route element={<PrivateRouter isAllowed={status === 'empty'} />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Route>
          <Route element={<PrivateRouter isAllowed={status === 'loaded'} redirectPath="/login" />}>
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<h1>In development</h1>} />
          </Route>
          <Route
            path="/admin"
            element={
              <PrivateRouter isAllowed={status === 'loaded'}>
                <h1>Admin Page</h1>
              </PrivateRouter>
            }
          />
        </Routes>
      </Container>
    </ProductsContextProvider>
  );
}

export default App;
