import React from 'react'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import {Link } from 'react-router-dom';



function Header() {
    return (
        <div>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
  <Container >
    <Navbar.Brand href="#home"><strong>CK SHOP</strong></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="d-flex ml-auto">
        <Nav.Link href="#home"><i className="fas fa-shopping-bag"></i> Bag</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Accounts" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to='/signin'>Sign in</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
          {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">My profile</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container >
</Navbar>
        </div>
    )
}

export default Header