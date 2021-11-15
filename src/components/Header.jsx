import React from 'react'
import axios from 'axios'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import {Link } from 'react-router-dom';
import { fetchUserRequest,fetchUserSuccess,fetchUserError,userVerify,userlogged } from '../redux/userStore/userAction';
import swal from 'sweetalert';


import {useDispatch,useSelector} from 'react-redux'

function Header() {
const dispatch = useDispatch()
const {userActive,users} = useSelector(state => state)

function logoutHandler(){
dispatch(fetchUserRequest())
axios.get('http://localhost:5000/user/logout').then(res=>{
dispatch(userlogged())
swal("Logout successfully");

}).catch(err=>{
dispatch(fetchUserError(err))


})


}

    return (
        <div>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
  <Container >
    <Navbar.Brand href="#home"><strong>CK SHOP</strong></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="d-flex ml-auto">
        <Nav.Link href="#home" variant='danger'><i className="fas fa-shopping-bag"></i> Bag</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title={userActive?users.name:"Accounts"} id="basic-nav-dropdown">

{userActive?<><NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">My profile</NavDropdown.Item></>:<NavDropdown.Item as={Link} to='/signin'>Sign in</NavDropdown.Item>}
         
          {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
          <NavDropdown.Divider />
          
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container >
</Navbar>
        </div>
    )
}

export default Header
