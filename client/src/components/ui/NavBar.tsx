import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { logoutUserThunk } from '../../features/redux/slices/user/thunks';
import { openModal } from '../../features/redux/slices/posts/postsSlice';

export default function NavBar(): JSX.Element {
  const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">{user.status === 'logged' ? user.name : 'Guest'}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link}>
              Home
            </Nav.Link>
            {user.status === 'logged' && (
              <Nav.Link to="/posts" as={Link}>
                Posts
              </Nav.Link>
            )}
            <NavDropdown title="Account" id="basic-nav-dropdown">
              {user.status === 'logged' ? (
                <>
                  <NavDropdown.Item onClick={() => void dispatch(openModal())}>
                    New Post
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => void dispatch(logoutUserThunk())}>
                    Logout
                  </NavDropdown.Item>
                </>
              ) : (
                <NavDropdown.Item to="/auth" as={Link}>
                  Login
                </NavDropdown.Item>
              )}
              {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
