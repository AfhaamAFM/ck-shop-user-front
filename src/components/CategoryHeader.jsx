import React, { useEffect } from 'react'
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCategory } from '../redux/category/categoryAction'


function CategoryHeader() {

const{category}=useSelector(state=>state.category)
const dispatch = useDispatch()




useEffect(()=>{

dispatch(fetchCategory())
},[dispatch])





// {category.map((value)=>{

    
//     return   <NavDropdown key={value._id} title={value.category} id="basic-nav-dropdown">
// <NavDropdown.Item as={Link} to={`/catProduct/${value.category}/`}  >All</NavDropdown.Item>
//         { value&&value.subCat.map((array,i)=>{

        
    
//       return     <NavDropdown.Item as={Link} to={`/catProduct/${value.category}/${array}`} key={i} >{array}</NavDropdown.Item>
         
//      })  }


    return (
        <>
          <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Select with category <span role="img" aria-label="smiiy">&#128515;</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
    {category.map((value)=>{
      return    <NavDropdown key={value._id} title={value.category} id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to={`/catProduct/${value.category}/`}  >All</NavDropdown.Item>
          {value&&value.subCat.map((array,i)=>{
        return  <NavDropdown.Item as={Link} to={`/catProduct/${value.category}/${array}`} key={i}>{array}</NavDropdown.Item>})}
      
        </NavDropdown>
    })}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

export default CategoryHeader

