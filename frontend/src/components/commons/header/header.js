/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Pin from '../../../assets/img/pin.png';
import './header.css';

const HeaderPrueba = () => {

  return (
    <Navbar expand='lg'>
      <Navbar.Brand type='button' href='#home'>Pinturillo</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <NavDropdown title='Categorias' id='basic-nav-dropdown'>
            <img className='header-pin-image' src={Pin} alt='header-pin image' />
            <NavDropdown.Item href='#action/3.1'>Categoria 1</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>Categoria 2</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Categoria 3</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.4'>Categoria 4</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-success'>Search</Button>
        </Form>
        <Button variant='outline-success'>Iniciar Sesion</Button>
        <Button variant='outline-success'>Registrarse</Button>
      </Navbar.Collapse>
    </Navbar>

  );
};

export default HeaderPrueba;
