import React from 'react'
import { useSelector } from 'react-redux'
import { Button, Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import { ArrowRight, Cart, Person } from 'react-bootstrap-icons';


const Navigationbar = () => {

  const products = useSelector(state => state.products)
  return (
    <>
      <Navbar style={{ backgroundColor: '#070720' }}>
        <Container>
          <Navbar.Brand href="/" style={{ color: 'white' }}>Game<span style={{ color: 'red' }}>Zone</span></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/" style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link href="#" style={{ color: 'white' }}>Categories</Nav.Link>
            <Nav.Link href="#" style={{ color: 'white' }}>Contact</Nav.Link>
          </Nav>
          <Form inline>

            <Nav.Link href="#" style={{ color: 'white' }}><Cart size={40} />{products.length}</Nav.Link>
          </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar
