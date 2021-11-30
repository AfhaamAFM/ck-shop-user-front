import React from 'react'
import { Container,Row,Image,Col } from 'react-bootstrap'
import {Link } from 'react-router-dom'

function PlaceOrderScreen() {
    return (
       <Container>
<Link to='/'>Go Home</Link>

           <Row className='mt-4 orderDetails'>
<h1 style={{color:'green'}}>Your order was Completed</h1>
<Image as={Col} style={{width:'70px'}} fluid src='http://www.clipartbest.com/cliparts/Kcj/X6n/KcjX6nABi.png'/>

           </Row>
       </Container>
    )
}

export default PlaceOrderScreen
