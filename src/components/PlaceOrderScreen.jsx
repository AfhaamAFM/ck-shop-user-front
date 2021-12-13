import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Card,
  Col,
  Form,
  Button,
  ListGroup,
  Table,
  Badge,
  Spinner,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { userlogged } from "../redux/userStore/userAction";
import Text from "antd/lib/typography/Text";
import CheckoutStep from "./Map component/CheckoutStep";
import { useNavigate } from "react-router-dom";
import { fetchOrders, placeCOD } from "../redux/ORDERSTORE/orderAction";
import Message from "./Map component/Message";
import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";
import Loader from "react-loader-spinner";
import {
  ORDER_PAY_REQUEST,
  ORDER_PAY_RESET,
  ORDER_PAY_SUCCESS,
} from ".././redux/ORDERSTORE/orderType";
import RazorPayComponent from "./UserProfile/RazorPayComponent";
import { fetchCart } from "../redux/CARTSTORE/cartAction";
import Swal from "sweetalert2";
import { fetchCheckout } from "../redux/Checkout/checkoutAction";
import { fetchCoupen } from "../redux/OFFER/offerAction";
import { Radio, Space } from 'antd';
import CoupenModal from "./Map component/CoupenModal";

function PlaceOrderScreen() {
  const [totalAmount, setTotalAmount] = useState(0);
const[coupenDiscount,setCoupenDiscount]=useState(0)
const[walletDiscount,setWalletDiscount]=useState(0)
const[currentWalletMoney,setCurrentWalletMoney]=useState()
const[coupenHere,setCoupenHere]=useState([])
const[selectedCoupen,setSelectedCoupen]=useState('')
const[coupenDetail,setCoupenDetail]=useState({
  coupenName:'',
  discount:''
})
const[coupenShow,setCoupenShow]=useState(false)


  const [totalMrp, setTotalMrp] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [showPaypal, setShowPaypal] = useState(false);
  const [showRazor, setShowRazor] = useState(false);
  const [showCod, setShowCod] = useState(false);
  const navigate = useNavigate();
  let [cartProducts, setCartProducts] = useState([]);
  let [cartItem, setCartItem] = useState([]);
  const { userActive, users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("");



  const{coupen,loading:coupenLoading}=useSelector((state)=>state.coupen)


  const {
    success: successPay,
    loading: loadingPay,
    orderPlaced,
    paid,
  } = useSelector((state) => state.orderPay);
  const {
    cartItems,
    loading: getCartLoading,
    address,
    amount,
  } = useSelector((state) => state.checkout);


  const [sdkReady, setSdkReady] = useState(false);

  const codPlaceHandler = () => {
    const orderStatus = "ordered";
    dispatch(placeCOD(paymentMethod, orderStatus, amount, address, cartItems));
  };

  const successPaymentHandler = (paymentResult) => {
    const { id: paymentId } = paymentResult;
    const orderStatus = "ordered";
    dispatch({ type: ORDER_PAY_REQUEST });

    axios
      .post(`/order/user/placeOrder`, {
        totalAmount,
        address,
        orderStatus,
        paymentMethod,
        cartItems,
        paymentId,
      })
      .then((res) => {
        if (res.data) {
          dispatch(fetchOrders());
          dispatch({ type: ORDER_PAY_SUCCESS });
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Payment success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

// ===================================Coupen and wallet discount handlers=============== START==========================
function walletDiscountHandler(){
  let disc=0
if(setTotalAmount<currentWalletMoney){
disc=currentWalletMoney-totalAmount
  setWalletDiscount(currentWalletMoney)
  setCurrentWalletMoney(disc)
}else if(totalAmount>currentWalletMoney){
  setWalletDiscount(currentWalletMoney)
  setCurrentWalletMoney(0)
}
}

// coupen discount
function coupenDiscountHandler(){
const id = selectedCoupen
const currentCoupen= coupen.find((value)=>value._id===id)
const {name,percentage}=currentCoupen
setCoupenDetail({
  coupenName:name,
  discount:percentage
})

const mrp= totalMrp-totalDiscount
const coupDisc= mrp*(percentage/100)
setCoupenDiscount(coupDisc)
coupenHandleClose()
}


const coupenHandleClose=()=>{
  
  setCoupenShow(false)

}
const coupenHandleShow=()=>{setCoupenShow(true)}
// ===================================Coupen and wallet discount handlers===================END======================




  useEffect(() => {
    // paypal start
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get("/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    // if(!showOrder) return
    if (successPay) {
      let keysToRemove = ["address", "cartItems", "amount"];

      for (var i of keysToRemove) {
        localStorage.removeItem(i);
      }
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(fetchOrders());
    }
    if (!window.paypal) {
      addPayPalScript();
    } else {
      setSdkReady(true);
    }

    // paypal end
    //eslint-disable-next-line
    //
if(!users){
  return
}
setCurrentWalletMoney(users.wallet)

  }, [dispatch, successPay,users]);

  useEffect(() => {
    if (!cartItems) return;
    if (!cartItems.cartProduct) return;
    setCartProducts(cartItems.cartProduct);

    setCartItem(cartItems.cartItem);

    // eslint-disable-next-line
  }, [dispatch, cartItems]);

  useEffect(() => {
    let totalMrp = 0;
    let totalAmount = 0;
    let totalDiscount = 0;

    cartItem.forEach((value, i) => {
      let index = cartProducts.findIndex((item) => item._id === value.product);
      cartProducts[index].isOffer &&
        (totalDiscount += Math.round(
          cartProducts[index].discountPrice * value.quantity
        ));
      totalAmount += cartProducts[index].isOffer
        ? Math.round(cartProducts[index].offerPrice * value.quantity)
        : Math.round(cartProducts[index].price * value.quantity);
      totalMrp += value.price * value.quantity;
    });
    setTotalAmount(totalAmount-(walletDiscount+coupenDiscount));
    setTotalMrp(totalMrp);
    setTotalDiscount(totalDiscount);
if(!coupen) return

const filterCop= coupen.filter((value,i)=>value.minAmount< (totalMrp-totalDiscount))
setCoupenHere(filterCop)
  }, [cartItem, dispatch,walletDiscount,coupenDiscount,coupen,totalAmount]);

  useEffect(() => {
    dispatch(fetchCart());
    dispatch(fetchOrders());
    dispatch(userlogged());
    dispatch(fetchCheckout());
    dispatch(fetchCoupen())

    // eslint-disable-next-line
  }, [dispatch]);

  // test

  return (
    <Container>

<CoupenModal coupenShow={coupenShow}
 setSelectedCoupen={setSelectedCoupen}
 coupenHandleClose={coupenHandleClose}
 coupenHere={coupenHere}
 coupenDiscountHandler={coupenDiscountHandler}  />



      {getCartLoading ? (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      ) : (
        <>
          <CheckoutStep step1 step2 step3 />

          <Row className="mt-4">
            <Col md={7}>
              <Row>
                <Card className="mb-3" as={Col}>
                  <Card.Body>
                    <Card.Title>Shipping Address</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {address?.name}
                    </Card.Subtitle>
                    <Card.Text>
                      <Text>
                        {address?.flatNo} ,{address?.landmark} ,
                        {address?.street} ,{address?.district} dist ,
                        {address?.state} ,{address?.pincode} ,<b>Ph:</b>
                        {address?.number}
                      </Text>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>

              {paid ? (
                <Message as={Col} variant={"success"}>
                  <h5>Payment</h5>
                  <p>paid</p>
                </Message>
              ) : (
                <Message as={Col} variant={"danger"}>
                  <h5>Payment</h5>
                  <p> Not paid</p>
                </Message>
              )}
              <Row>
                {!orderPlaced && (
                  <Col>
                    <h4>Select payment method</h4>

                    <Form>
                      <Form.Group>
                        <Form.Check
                          name="paymentMethod"
                          type="radio"
                          value="COD"
                          label="Cash on Delivary"
                          onChange={(e) => {
                            setShowCod(true);
                            setShowRazor(false);
                            setShowPaypal(false);

                            setPaymentMethod(e.target.value);
                          }}
                        />

                        <Form.Check
                          name="paymentMethod"
                          onChange={(e) => {
                            setShowPaypal(true);
                            setShowRazor(false);
                            setShowCod(false);
                            setPaymentMethod(e.target.value);
                          }}
                          type="radio"
                          value="paypal"
                          label="Paypal"
                        />
                        <Form.Check
                          onChange={(e) => {
                            setShowRazor(true);
                            setShowPaypal(false);
                            setShowCod(false);
                            setPaymentMethod(e.target.value);
                          }}
                          name="paymentMethod"
                          type="radio"
                          value="razorpay"
                          label="Razorpay"
                        />
                      </Form.Group>
                    </Form>

                    {/* <Button className='mx-3' variant='danger'>Go For Payment</Button> */}
                  </Col>
                )}
              </Row>
            </Col>
            {/* main div 2 */}
            <Col md={5}>
              <Row className='mb-3'>
                <Col>
                  <Card>
                    <Col sm={12} className="p-4">
                      <Card.Title>Wallet </Card.Title>
                      {walletDiscount&&<Badge onClick={()=>{setWalletDiscount(0)
                      
                      setCurrentWalletMoney(users.wallet)
                      }}  bg="info">reset</Badge>}
                      <hr />
                    </Col>
                    <Col>
                  
                      <Card.Subtitle className='d-flex justify-content-center"'>
                        <h4>₹{currentWalletMoney} {currentWalletMoney&&<Badge style={{cursor:'pointer'}} onClick={walletDiscountHandler}  bg="danger">Use Wallet</Badge>}</h4>
                        
                      </Card.Subtitle>
                    </Col>
                  </Card>
                </Col>
              </Row>
              <Row className='mb-3'>
                <Col>
                  <Card>
                    <Col sm={12} className="p-1">
                      <Card.Title className='px-3 pt-2'>Coupens {coupenLoading?<Spinner animation="grow" />:!coupen? <small style={{color:'red'}} >no coupen</small>:<Badge style={{cursor:'pointer'}} onClick={coupenHandleShow}  bg="success">Appy</Badge>}</Card.Title>
                      <hr />
                    </Col>
                    <Col className='mb-3 d-flex' >
<Space direction='vertical'>
{selectedCoupen?<><Text>Name:  {coupenDetail.coupenName}</Text>
<Text>Discount:  {coupenDetail.discount}</Text></>: <Text>No coupen selected</Text> }
</Space>
                    </Col>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card>
                    <Col sm={12} className="p-4">
                      <Card.Title>PRICE DETAILS</Card.Title>
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
                    <Row className="p-1 ms-1">
                      <Col md={4}>
                        {" "}
                        <Text strong>Discount on MRP</Text>
                      </Col>
                      <Col md={{ span: 4, offset: 4 }}>
                        <Text type="success"> -₹{totalDiscount} off</Text>{" "}
                      </Col>
                    </Row>
                    <Row className="p-1 ms-1">
                      <Col md={4}>
                        {" "}
                        <Text strong>Wallet</Text>
                      </Col>
                      <Col md={{ span: 4, offset: 4 }}>
                        <Text type="success"> -₹{walletDiscount} off</Text>{" "}
                      </Col>
                    </Row>
                    <Row className="p-1 ms-1">
                      <Col md={4}>
                        {" "}
                        <Text strong>Coupen Discount</Text>
                      </Col>
                      <Col md={{ span: 4, offset: 4 }}>
                        <Text type="success"> -₹{coupenDiscount} off</Text>{" "}
                      </Col>
                    </Row>
                    <hr />

                    <Row className="p-1 ms-1">
                      <Col md={4}>
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
                <Col className="p-5">
                  <ListGroup>
                    {!orderPlaced ? (
                      <ListGroup.Item>
                        {showCod && (
                          <Button
                            onClick={codPlaceHandler}
                            className="mx-3"
                            variant="danger"
                          >
                            Proceed Cash on delivary
                          </Button>
                        )}
                        {showRazor && (
                          <RazorPayComponent
                            successPaymentHandler={successPaymentHandler}
                            totalAmount={totalAmount}
                          />
                        )}

                        {loadingPay && <Loader />}
                        {!sdkReady ? (
                          <Loader />
                        ) : showPaypal ? (
                          <PayPalButton
                            amount={(totalAmount/75).toString()}
                            onSuccess={successPaymentHandler}
                          />
                        ) : (
                          ""
                        )}
                      </ListGroup.Item>
                    ) : (
                      <>
                        <Row>
                          <Button
                            variant="info"
                            onClick={() => {
                              navigate("/");
                            }}
                            className="m-3 px-2"
                          >
                            Continue Shopping
                          </Button>

                          <Button
                            variant="warning"
                            onClick={() => {
                              navigate("/cart");
                            }}
                            className="m-3 px-2"
                          >
                            Go to Cart
                          </Button>
                        </Row>
                      </>
                    )}
                  </ListGroup>
                </Col>
              </Row>
            </Col>
            {/* main dov 2 */}
          </Row>
          {orderPlaced && (
            <Row>
              <Col>
                <h4>Order Summary</h4>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Item Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Sub Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItem.map((value, i) => {
                      let index = cartProducts.findIndex(
                        (item) => item._id === value.product
                      );

                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>
                            {cartProducts[index].name}{" "}
                            <small>
                              {cartProducts[index].category}'s{" "}
                              {cartProducts[index].subCat}
                            </small>{" "}
                          </td>
                          <td>{value.price}</td>
                          <td>{value.quantity}</td>
                          <td>{value.quantity * value.price}</td>
                        </tr>
                      );
                    })}

                    <tr>
                      <td colSpan="4 ">Total amount ({totalDiscount}% off) </td>

                      <td>
                        {" "}
                        <b> {amount}</b>{" "}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          )}
        </>
      )}
    </Container>
  );
}

export default PlaceOrderScreen;
