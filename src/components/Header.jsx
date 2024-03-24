import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand='lg' className='bg-body-tertiary custom-navbar'>
      <Container>
        <Navbar.Brand as={Link} to={'/'} className='fs-4'>
          {'<Lib />'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto custom-navbar-border'>
            <Nav.Link as={NavLink} to={`/`} className='custom-navbar-border'>
              Books
            </Nav.Link>
            <Nav.Link as={NavLink} to={`/authors`}>
              Authors
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
