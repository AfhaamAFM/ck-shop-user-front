import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Card,
  Col,
 
  Button,

} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { userlogged } from "../redux/userStore/userAction";
import Text from "antd/lib/typography/Text";
import CheckoutStep from "./Map component/CheckoutStep";
import { useNavigate } from "react-router-dom";
import { fetchCheckout } from "../redux/Checkout/checkoutAction";

function CheckoutPaymentScreen() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalMrp, setTotalMrp] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  let [cartProducts, setCartProducts] = useState([]);
  let [cartItem, setCartItem] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate(0);
  // const { amount, address } = useSelector((state) => state.checkout);
  const {
    cartItems,
    address,
  } = useSelector((state) => state.checkout);

  // use effects

  useEffect(() => {
    if (!cartItems) return;
    setCartProducts(cartItems.cartProduct);
    setCartItem(cartItems.cartItem);
  }, [dispatch, cartItems]);

  useEffect(() => {
    let totalMrp = 0;
    let totalAmount = 0;
    let totalDiscount = 0;
    if (!cartItem) return;
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
    setTotalAmount(totalAmount);
    setTotalMrp(totalMrp);
    setTotalDiscount(totalDiscount);
  }, [dispatch, cartItem]);

  // checking user is logged in or not
  useEffect(() => {
    dispatch(fetchCheckout());

    dispatch(userlogged());
    // eslint-disable-next-line 
  }, [dispatch]);

  return (
    <Container>
      <CheckoutStep step1 step2 step3 />

      <Row className="mt-4">
        <Col>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Shipping Address</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {address?.name}
              </Card.Subtitle>
              <Card.Text>
                <Text>
                  {address?.flatNo} ,{address?.landmark} ,{address?.street} ,
                  {address?.district} dist ,{address?.state} ,{address?.pincode}{" "}
                  ,<b>Ph:</b>?{address?.number}
                </Text>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

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
      <Row className="mt-4">
        <Button
          onClick={() => {
            navigate(`/placeOrder`);
          }}
          variant="danger"
        >
          Go For Payment
        </Button>
      </Row>
    </Container>
  );
}

export default CheckoutPaymentScreen;
