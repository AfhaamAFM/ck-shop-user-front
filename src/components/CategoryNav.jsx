import React, { useEffect } from 'react'
import { Container, Nav, Navbar, Offcanvas,Button,NavDropdown,Form,FormControl } from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCategory } from '../redux/category/categoryAction'


function CategoryNav() {

const{category}=useSelector(state=>state.category)
const dispatch = useDispatch()




useEffect(()=>{

dispatch(fetchCategory())
},[])



    return (
        <div>
            <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#">Let shop with category</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          {/* <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link> */}
         {category.map((value)=>{

    
       return   <NavDropdown key={value._id} title={value.category} id="offcanvasNavbarDropdown">
<NavDropdown.Item as={Link} to={`/catProduct/${value.category}/`}  >All</NavDropdown.Item>
           { value&&value.subCat.map((array,i)=>{

           
       
         return     <NavDropdown.Item as={Link} to={`/catProduct/${value.category}/${array}`} key={i} >{array}</NavDropdown.Item>
            
        })  }
          </NavDropdown>

           })}
        </Nav>
       
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
        </div>
    )
}

export default CategoryNav

