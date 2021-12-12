import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Image,ListGroup,Spinner,Button} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import { fetchOrders } from '../../redux/ORDERSTORE/orderAction'
import Swal from 'sweetalert2'


function MyordersScreen() {


const dispatch = useDispatch()
const {orders,loading} =useSelector(state=>state.order)
const[orderList,setOrderList]=useState('')


// useEffects constainer start





function cancelOrderHandler(e){

const orderId = e.target.id

Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Cancel it!'
  }).then((result) => {

if(result.isConfirmed){
    axios.get(`/order/user/cancelOrder/${orderId}`).then(res=>{

console.log('ulli ljkerrin');

        if (res.data) {
            Swal.fire(
              'Deleted!',
              'Your order has been canceled.',
              'success'
            )
            dispatch(fetchOrders())
          }

    })
}
   
  })






}

useEffect(()=>{

dispatch(fetchOrders())

},[dispatch])

useEffect(()=>{

   if(!orders)
   return 
const orderList = orders.orders
  //  setOrderList(orders.orders)
  const sortedOrders= orderList.sort((a,b) => (a.paymentResult.payed_Date < b.paymentResult.payed_Date ) ? 1 : ((b.paymentResult.payed_Date  < a.paymentResult.payed_Date ) ? -1 : 0));
    setOrderList(sortedOrders)
    },[orders])

// useEffects constainer end

console.log('Rhis',orderList);


    return (
        
        <Container>
                <h1>My orders</h1>
       { orderList?orderList.map((value,m)=>{ 
     return <Row key={value._id}>
            <ListGroup className='mb-3'>
                <Row className='p-3 order-container' >
                    <Col md={4} >
                        <h5 >Order {m+1}</h5>
                        {value.orderStatus==='canceled'?<h6 style={{color:'red'}}>Your order is canceled</h6>:<h6>order status : {value.orderStatus}</h6>}
                        
                        <h6>Price : ₹ {value.amount}</h6>
                    </Col>
                    <Col md={3}>
                       {value.orderStatus!=='canceled'&&<Button id={value._id} onClick={cancelOrderHandler} variant='danger'>Cancel</Button>}
                    </Col>
                </Row>
{value.orderItem.map((product,i)=>{
 return <ListGroup.Item key={i}>
      <Row>

<Col sm={2}> <Image style={{width:'30px'}} src={product.image} /></Col>
<Col sm={4}> <p>{product.name} <small>{product.category}'s {product.subCat}</small> </p></Col>
<Col> <p></p> </Col>
      </Row>
  </ListGroup.Item>})}

</ListGroup>
      </Row>}):loading?<Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner> :<h4>No orders</h4>}

            
        </Container>
    )
}

export default MyordersScreen
