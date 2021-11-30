import React, { useEffect, useState } from 'react'
import { Container, Row, Card, Col, Form, Button, ListGroup } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { userlogged } from '../redux/userStore/userAction'
import Text from 'antd/lib/typography/Text'
import CheckoutStep from './Map component/CheckoutStep'
import { storePaymentMethod } from '../redux/Checkout/checkoutAction'
import {useNavigate} from 'react-router-dom'
import { addOrder } from '../redux/ORDERSTORE/orderAction'


function CheckoutPaymentScreen() {

    const dispatch = useDispatch()
    const [paymentMethod, setPaymentMethod] = useState('')
const navigate =useNavigate(0)
    const { amount, address } = useSelector((state) => state.checkout);
    const { cartItems, loading: getCartLoading } = useSelector( (state) => state.cart );





    function placeOrderHandler() {
// dispatch(storePaymentMethod(paymentMethod))

dispatch(addOrder({amount,address,paymentMethod,orderStatus:'ordered',cartItems}))
navigate('/placeOrder')

    }


    // use effects

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
                  
                            <ListGroup>

                            <h3>Total amount to Pay</h3>
                                <ListGroup.Item>
                                    <h6>₹ {amount}</h6>
                                </ListGroup.Item>
                            </ListGroup>
                        
                </Col>

            </Row>
            <Row>

                <Col>

                    <h4>Select payment method</h4>


                    <Form>

                        <div className="mb-3">
                            <Form.Check
                                type='radio'
                                value='Cash on Delivary'
                                label='Cash on Delivary'
                                onChange={(e) => { setPaymentMethod(e.target.value) }}
                            />

                            <Form.Check
                                disabled
                                type='radio'

                                label='Paypal'
                            />
                            <Form.Check
                                disabled
                                type='radio'

                                label='Razorpay'
                            />
                        </div>

                    </Form>

                    <Button onClick={placeOrderHandler} disabled={!paymentMethod} variant='danger'>Place Order</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default CheckoutPaymentScreen

