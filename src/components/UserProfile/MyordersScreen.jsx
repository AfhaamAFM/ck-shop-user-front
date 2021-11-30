import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Image,ListGroup,Spinner} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import { fetchOrders } from '../../redux/ORDERSTORE/orderAction'



function MyordersScreen() {


const dispatch = useDispatch()
const {orders} =useSelector(state=>state.order)
const[orderList,setOrderList]=useState('')


// useEffects constainer start

useEffect(()=>{

dispatch(fetchOrders())

},[dispatch])

useEffect(()=>{

   if(!orders)
   return 

   setOrderList(orders.orders)

    
    },[orders])

// useEffects constainer end

console.log('Rhis',orderList);


    return (
        
        <Container>
                <h1>My orders</h1>
       { orderList?orderList.map((value,m)=>{ 
     return <Row key={value._id}>
            <ListGroup className='mb-3'>
                <ListGroup.Item>
                    <h5>Order {m+1}</h5>
<h6>order status : {value.orderStatus}</h6>
<h6>Price : ₹ {value.amount}</h6>
                </ListGroup.Item>
{value.orderItem.map((product,i)=>{
 return <ListGroup.Item key={i}>
      <Row>

<Col sm={2}> <Image style={{width:'50px'}} src={product.image} /></Col>
<Col sm={4}> <p>{product.name} <small>{product.category}'s {product.subCat}</small> </p></Col>
<Col> <p></p> </Col>
      </Row>
  </ListGroup.Item>})}

</ListGroup>
      </Row>}):<Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner> }

            
        </Container>
    )
}

export default MyordersScreen
