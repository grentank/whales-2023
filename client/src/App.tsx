import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/ui/NavBar';
import MainPage from './components/pages/MainPage/MainPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import { useAppDispatch, useAppSelector } from './features/redux/hooks';
import { loadPostsThunk } from './features/redux/slices/posts/thunks';
import PrivateRouter from './components/HOC/PrivateRouter';
import Loader from './components/HOC/Loader';
import { checkUserThunk } from './features/redux/slices/user/thunks';

function App(): JSX.Element {
  const status = useAppSelector((store) => store.user.status);

  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(loadPostsThunk());
    void dispatch(checkUserThunk());
  }, []);
  return (
    <Loader isLoading={status === 'fetching'}>
      <Container>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/login"
            element={
              <PrivateRouter isAllowed={status === 'empty'}>
                <LoginPage />
              </PrivateRouter>
            }
          />
        </Routes>
      </Container>
    </Loader>
  );
}

export default App;
