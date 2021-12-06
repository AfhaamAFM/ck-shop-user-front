import React, { useEffect, useState } from 'react'
import { Container, Row, Card, Col, Form, Button, ListGroup } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { userlogged } from '../redux/userStore/userAction'
import Text from 'antd/lib/typography/Text'
import CheckoutStep from './Map component/CheckoutStep'
import { useNavigate } from 'react-router-dom'
import { addOrder } from '../redux/ORDERSTORE/orderAction'
import axios from 'axios'
import { PayPalButton } from 'react-paypal-button-v2'


function CheckoutPaymentScreen() {



    const [totalAmount, setTotalAmount] = useState(0);
    const [totalMrp, setTotalMrp] = useState(0)
    const [totalDiscount, setTotalDiscount] = useState(0)
    let [cartProducts, setCartProducts] = useState([]);
    let [cartItem, setCartItem] = useState([]);
    const [sdkReady, setSdkReady] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate(0)
    const { amount, address } = useSelector((state) => state.checkout);
    const { cartItems, loading: getCartLoading } = useSelector((state) => state.cart);
    const { orderId } = useSelector((state) => state.order);





    function placeOrderHandler() {

        dispatch(addOrder({ amount, address, cartItems }))

    }


    // use effects

    useEffect(() => {
        if (!cartItems) return;
        if (!cartItems.cartProduct) return;
        setCartProducts(cartItems.cartProduct);

        setCartItem(cartItems.cartItem);



    }, [cartItems, orderId]);
    useEffect(() => {

        let totalMrp = 0;
        let totalAmount = 0
        let totalDiscount = 0

        cartItem.forEach((value, i) => {
            let index = cartProducts.findIndex(item => item._id === value.product);

            totalDiscount += Math.round(cartProducts[index].discountPrice * value.quantity)
            totalAmount += Math.round(cartProducts[index].offerPrice * value.quantity)
            totalMrp += value.price * value.quantity
        })
        setTotalAmount(totalAmount);
        setTotalMrp(totalMrp)
        setTotalDiscount(totalDiscount)


    }, [cartItem])

    useEffect(() => {
        if (orderId) {
            navigate(`/placeOrder/${orderId}`)
        }

    })
    useEffect(() => {
      

        dispatch(userlogged())


    }, [dispatch])





    return (
        <Container>

            <CheckoutStep step1 step2 step3 />

            <Row className='mt-4'>

                <Col>
                    <Card className="mb-3">

                        <Card.Body>
                            <Card.Title>Shipping Address</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                {address.name}
                            </Card.Subtitle>
                            <Card.Text>
                                <Text>
                                    {address.flatNo} ,{address.landmark} ,
                                    {address.street} ,{address.district} dist ,
                                    {address.state} ,{address.pincode} ,
                                    <b>Ph:</b>
                                    {address?.number}
                                </Text>
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>

                <Col>

                    <Card>
                        <Col sm={12} className="p-4">
                            <Card.Title>
                                PRICE DETAILS
                            </Card.Title>
                            <hr />
                        </Col>

                        <Row className="p-1 ms-1">
                            <Col md={4}>
                                <Text strong> total mrp</Text>
                            </Col>
                            <Col md={{ span: 4, offset: 4 }}>
                                <Text>₹{totalMrp}</Text>{" "}
                            </Col>
                        </Row>
                        <Row className='p-1 ms-1'>
                            <Col md={4}> <Text strong>Discount on MRP</Text></Col>
                            <Col md={{ span: 4, offset: 4 }}><Text type='success' > -₹{totalDiscount} off</Text> </Col>
                        </Row>
                        {/* <Row className='p-1 ms-1'>
                         <Col md={4}> <Text strong>Coupen Discount</Text></Col>
                           <Col md={{ span: 4, offset: 4 }}><Text>₹ 435</Text> </Col>
                         </Row> */}
                        {/* <Row className='p-1 ms-1'>
                          <Col md={4}> <Text strong>Convienience Fee</Text></Col>
                  <Col md={{ span: 4, offset: 4 }}><Text>₹ 435</Text> </Col>
                  </Row> */}
                        <hr />

                        <Row className="p-1 ms-1">
                            <Col md={4}>
                                {" "}
                                <Text strong>Grand Total</Text>
                            </Col>
                            <Col md={{ span: 4, offset: 4 }}>
                                <Text strong>₹{totalAmount}</Text>{" "}
                            </Col>
                        </Row>
                    </Card>

{/* payapl button start */}


{/* Pay pal buttin end */}
                </Col>

            </Row>
            <Row className='mt-4'>

               
                    <Button onClick={placeOrderHandler}  variant='danger'>Go For Payment</Button>
            </Row>
        </Container>
    )
}

export default CheckoutPaymentScreen

