import React, { useEffect, useState } from 'react'
import { Container, Row, Card, Col, Form, Button, ListGroup } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { userlogged } from '../redux/userStore/userAction'
import Text from 'antd/lib/typography/Text'
import CheckoutStep from './Map component/CheckoutStep'
import { useNavigate } from 'react-router-dom'
import { addOrder, fetchOrders } from '../redux/ORDERSTORE/orderAction'
import Message from './Map component/Message'
import { PayPalButton } from 'react-paypal-button-v2'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import { ORDER_PAY_RESET } from '.././redux/ORDERSTORE/orderType'
function PlaceOrderScreen() {


    const [showOrder, setShowOrder] = useState()
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalMrp, setTotalMrp] = useState(0)
    const [totalDiscount, setTotalDiscount] = useState(0)
    const [showPaypal, setShowPaypal] = useState(false)
    let [cartProducts, setCartProducts] = useState([]);
    let [cartItem, setCartItem] = useState([]);
    const dispatch = useDispatch()
    const [paymentMethod, setPaymentMethod] = useState('')
    const navigate = useNavigate(0)
    const { amount, address } = useSelector((state) => state.checkout);
    const { cartItems, loading: getCartLoading } = useSelector((state) => state.cart);
    const { orders: allOrder, loading: orderFetchLoading } = useSelector((state) => state.order);
    const { orders } = allOrder
    const { orderId } = useParams()

    const { success: successPay, loading: loadingPay } = useSelector((state) => state.orderPay);

    const [sdkReady, setSdkReady] = useState(false)




    const successPaypalPaymentHandler = (paymentResult) => {

        console.log(paymentResult);
    }
    // use effects

    useEffect(() => {
        if (!orders)
            return
        const finded = orders.find(value => value.orderId === orderId)

        setShowOrder(finded)
    })


    useEffect(() => {

        const addPayPalScript = async () => {

            const { data: clientId } = await axios.get('/config/paypal')
            console.log(clientId);
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
            script.async = true
            script.onload = () => {

                setSdkReady(true)
            }
            document.body.appendChild(script)
        }
        // if(!showOrder) return
        if (!allOrder || successPay) {
            dispatch({ type: ORDER_PAY_RESET })
            dispatch(fetchOrders())

        }
        if (!window.paypal) {
            addPayPalScript()
        } else {
            setSdkReady(true)
        }


    }, [dispatch, successPay])

    // const showOrder = orders&&orders.find(value=>value.orderId===orderId)

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
        dispatch(fetchOrders())
        dispatch(userlogged())
    }, [dispatch])

    return (
        <Container>
            {orderFetchLoading || !allOrder || !showOrder ? <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
            /> :
                <>
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

                            {showOrder.isPaid ? <Message variant={'success'} >
                                <h5>Payment</h5>
                                <p>paid</p>
                            </Message> : <Message variant={'danger'} >
                                <h5>Payment</h5>
                                <p> Not paid</p>
                            </Message>}

                        </Col>

                        <Col sm={12} md={4}>
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


                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>



                            <h4>Select payment method</h4>


                            <Form>
                                <Form.Group>


                                    <div className="mb-3">
                                        <Form.Check
                                            name='paymentMethod'
                                            type='radio'
                                            value='COD'
                                            label='Cash on Delivary'
                                            onChange={(e) => {
                                                setShowPaypal(false)

                                                setPaymentMethod(e.target.value)
                                            }}
                                        />

                                        <Form.Check
                                            name='paymentMethod'
                                            onChange={(e) => {
                                                setShowPaypal(true)
                                                setPaymentMethod(e.target.value)

                                            }}
                                            type='radio'
                                            value='paypal'
                                            label='Paypal'

                                        />
                                        <Form.Check
                                            onChange={(e) => {
                                                setPaymentMethod(e.target.value)

                                            }}
                                            name='paymentMethod'
                                            disabled
                                            type='radio'
                                            value='razorpay'
                                            label='Razorpay'
                                        />
                                    </div>
                                </Form.Group>
                            </Form>

                            <Button className='mx-3'variant='danger'>Go For Payment</Button>


                        </Col>

                        <Col md={6} className='p-5'>
                            {/* !showOrder?.isPaid|| */}
                            {showPaypal && (<ListGroup>
                                <ListGroup.Item>
                                    {loadingPay && <Loader />}
                                    {!sdkReady ? <Loader /> : (<PayPalButton
                                        amount={showOrder.amount}
                                        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                        onSuccess={successPaypalPaymentHandler}
                                    />)}
                                </ListGroup.Item>
                            </ListGroup>)}

                        </Col>
                    </Row>

                </>
            }
        </Container>
    )
}

export default PlaceOrderScreen


