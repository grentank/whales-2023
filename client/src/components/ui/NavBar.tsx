/* eslint-disable react/destructuring-assignment */
import React, { memo, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { UserContext, useUserHandlers } from '../../contexts/user/userContext';

function NavBar(): JSX.Element {
  const user = useContext(UserContext);

  const { logoutHandler } = useUserHandlers();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">{user.status === 'loaded' ? user.name : 'Guest'}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link}>
              Home
            </Nav.Link>
            {user.status === 'loaded' ? (
              <>
                <Nav.Link to="/products" as={Link}>
                  Products
                </Nav.Link>
                <Nav.Link as={Button} onClick={logoutHandler}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link to="/login" as={Link}>
                  Login
                </Nav.Link>
                <Nav.Link to="/signup" as={Link}>
                  Signup
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default memo(NavBar);
