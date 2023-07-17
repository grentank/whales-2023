import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/ui/NavBar';
import MainPage from './components/pages/main/MainPage';
import AuthPage from './components/pages/auth/AuthPage';
import PostsPage from './components/pages/posts/PostsPage';
import PrivateRouter from './components/HOC/PrivateRouter';
import { useAppSelector, useAppDispatch } from './features/redux/hooks';
import Loader from './components/HOC/Loader';
import { checkUserThunk } from './features/redux/slices/user/thunks';
import ModalPosts from './components/ui/ModalPosts';

function App(): JSX.Element {
  const status = useAppSelector((store) => store.user.status);
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(checkUserThunk());
  }, []);
  return (
    <Container>
      <Loader isLoading={status === 'fetching'}>
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/auth"
              element={
                <PrivateRouter redirectPath="/posts" isAllowed={status === 'guest'}>
                  <AuthPage />
                </PrivateRouter>
              }
            />
            <Route
              path="/posts"
              element={
                <PrivateRouter isAllowed={status === 'logged'}>
                  <PostsPage />
                </PrivateRouter>
              }
            />
          </Routes>
          <ModalPosts />
        </>
      </Loader>
    </Container>
  );
}

export default App;
