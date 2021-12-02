import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Placeholder,
  Spinner,
} from "react-bootstrap";
import { Select, Typography, Space } from "antd";
import AdressModal from "./CartModal/AdressModal";
import { useSelector, useDispatch } from "react-redux";
import { addAddress, userlogged } from "../../redux/userStore/userAction";
import Swal from "sweetalert2";
import { Link,useNavigate } from "react-router-dom";
import AddAddressModal from "./CartModal/AddAddressModal";
import axios from "axios";
import { fetchCart } from "../../redux/CARTSTORE/cartAction";
import CheckoutStep from "../Map component/CheckoutStep";
import { storeAddress, storeAmount, storecartItems } from "../../redux/Checkout/checkoutAction";

const { Option } = Select;
const { Text, Title } = Typography;


function CartScreen() {

const[checkoutWarning,setCheckoutWarning]=useState()
const navigate =useNavigate()
  const dispatch = useDispatch();
  // UseStates
  const [changeAddressShow, setChangeAddressShow] = useState(false);
  const [addAddressShow, setAddAddressShow] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  // address states
  const [name, setName] = useState("");
  const [flatNo, setFlatNO] = useState("");
  const [number, setNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [landmark, setLandmark] = useState("");
  const [warning, setWarning] = useState("");
  const [loading, setLoading] = useState(false);
  // form error states

  const [allAddress, setAllAddress] = useState();
  const [selectedAddressID, setSelectedAddressID] = useState("");
  // const[defaultAddress,setDefualtAddress]=useState('')

  // Redux function
  const { userActive, users } = useSelector((state) => state.user);
  const { cartItems, loading: getCartLoading } = useSelector( (state) => state.cart );

  // =============================Modal controller start===============================

  // Change address modal
  const addressHandleClose = () => setChangeAddressShow(false);
  const addressHandleShow = () => setChangeAddressShow(true);

  // Add address modal
  const addAddressHandleClose = () => setAddAddressShow(false);
  const addAddressHandleShow = () => setAddAddressShow(true);

  const modalAddButtonHandler = () => {
    addressHandleClose();

    addAddressHandleShow();
  };

  // ==================================modal controller end=============================

  // QUANTITY HANDLER START
  const quantityHandler = () => {};

  // Quantity handler end

  // ===============================Add new ADDRESS START=========================

  function addAddressHandler() {
    setLoading(true);
    if (
      !name ||
      !flatNo ||
      !number ||
      !pincode ||
      !street ||
      !district ||
      !state ||
      !landmark
    ) {
      setLoading(false);
      return setWarning("Please fill all,thisssss");
    }
    axios
      .post("/user/address/add", {
        name,
        flatNo,
        number,
        pincode,
        street,
        district,
        state,
        landmark,
      })
      .then((res) => {
        if (res.data.response) {
          setLoading(false);
          return setWarning(res.data.response);
        }

        if (res.data) {
          setLoading(false);
          dispatch(userlogged());
          addAddressHandleClose();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Address added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  }

  // ===============================ADD NEW ADDRESS END ==========================

  // Delete cart start
  function deleteHandler(e) {
    const id = e.target.id;
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete it!'
    }).then((result) => {
  
  if(result.isConfirmed){
    
    axios
      .get(`/user/cart/delete/${id}`)
      .then((res) => {
        if (res.data) {
          dispatch(fetchCart());
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "cart item deleted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log("this is a cart item delete " + err);
      });
    }})
 
  }

  // delete end



  // Checkout Handler start

function checkoutHandler(){
if(!showAddress){

  return setCheckoutWarning('Select a address')
}

if(cartItems.cartItem.length===0){

  return setCheckoutWarning('Cart is empty')
}
  dispatch(storeAmount(totalAmount))
  dispatch(storeAddress(showAddress))
  dispatch(storecartItems(cartItems))



navigate('/checkoutPay')
  

}
  
  // Checkout Handler end

  // cartItems&&cartItems.map((v) => {setTotalAmount(totalAmount+(v.cartItem.quantity*v.cartItem.price))})

  useEffect(() => {
    dispatch(userlogged());
    users && setAllAddress(users.address);
    dispatch(fetchCart());
  }, [dispatch, selectedAddressID]);

  let [cartProducts, setCartProducts] = useState([]);
  let [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    if (!cartItems) return;
    if (!cartItems.cartProduct) return;
    setCartProducts(cartItems.cartProduct);

    setCartItem(cartItems.cartItem);




  }, [cartItems]);



useEffect(()=>{

let total=0;
cartItem.forEach(item=>{
  total+=item.price*item.quantity
})
setTotalAmount(total);


},[cartItem])







  const showAddress = selectedAddressID ? (
    users.address.find((p) => p._id === selectedAddressID)
  ) : users ? (
    users.address[0]
  ) : (
    <Placeholder as="p" animation="glow">
      <Placeholder xs={12} />
    </Placeholder>
  );

  return (
    <div>
      <Container>
        {/* Modalss start */}
        <CheckoutStep step1 step2 />

        <AdressModal
          changeAddressShow={changeAddressShow}
          addressHandleClose={addressHandleClose}
          setChangeAddressShow={setChangeAddressShow}
          address={users?.address}
          setSelectedAddressID={setSelectedAddressID}
          addAddressHandleShow={addAddressHandleShow}
          modalAddButtonHandler={modalAddButtonHandler}
        />
        <AddAddressModal
          name={name}
          flatNo={flatNo}
          number={number}
          pincode={pincode}
          street={street}
          district={district}
          state={state}
          landmark={landmark}
          setName={setName}
          setFlatNo={setFlatNO}
          setNumber={setNumber}
          setPincode={setPincode}
          setStreet={setStreet}
          setDistrict={setDistrict}
          setState={setState}
          setLandmark={setLandmark}
          warning={warning}
          loading={loading}
          addAddressHandler={addAddressHandler}
          addAddressShow={addAddressShow}
          addAddressHandleClose={addAddressHandleClose}
        />

        {/* Modals end */}

        <Row className="mt-5">
          <Title>
            Shopping Bag <i className="fas fa-shopping-bag"></i>{" "}
          </Title>

          {userActive? (
            <>
              <Col sm={12} md={8}>
                <Card className="mb-3">
                  <Col sm={12} className="mb-3">
                    <Card.Body>
                      <Card.Title>Delivary to</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {showAddress?.name}
                      </Card.Subtitle>
                      <Card.Text>
                        <Text>
                          {showAddress?.flatNo} ,{showAddress?.landmark} ,
                          {showAddress?.street} ,{showAddress?.district} dist ,
                          {showAddress?.state} ,{showAddress?.pincode} ,
                          <b>Ph:</b>
                          {showAddress?.number}
                        </Text>
                      </Card.Text>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={addressHandleShow}
                      >
                        Change Address
                      </Button>
                    </Card.Body>
                  </Col>
                </Card>
                {/* Delivary address end */}
                {/* Cart items start */}
                {cartItems ? (
                  <>
                    {cartItem.map((value, i) => {

                      let index=cartProducts.findIndex(item=>item._id===value.product);
                      return (
                        <Card className="mb-3" key={value._id}>
                          <Row className="p-2">
                            <Col md={2}>
                              <Image
                                src={ cartProducts[index].imageUrl[0].img}
                                alt="product image"
                                fluid
                                rounded
                              />
                            </Col>
                            <Col md={6}>
                              <Card.Title>
                                {cartItems && cartItem.name}
                              </Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">
                                {`${cartProducts[index].category}'s ${cartProducts[index].subCat}`}
                              </Card.Subtitle>
                             {/* <Card.Text>{v.cartProduct[0].description}</Card.Text>  */}
                              <Text strong>{value.quantity*value.price}</Text>
                              {/* QUANTITY SELECTOR STRAT */}

                              {/* QUANTITY SELECTOR END */}
                            </Col>
                            <Col md={3}>
                              <Row>
                                {/* <Select id={v.cartItem._id} className='mb-3' defaultValue={1} style={{ width: 120 }} onChange={quantityHandler}>


                            <>
                              {


                                < Option value={1}>{1}</Option>
                              }

                            </>
                          </Select> */}
                                <div className="quantityHandler">
                                  <i className="fas fa-minus-circle"></i>
                                  <input type="text" size='5' readOnly value={value.quantity} />
                                  <i className="fas fa-plus-circle"></i>
                                </div>
                                <Card.Text>Select quantity {value.quantity} </Card.Text>
                              </Row>

                              <Row>
                                <Space direction="horizontal">
                                  <Text strong>Size : </Text>
                                  <Text >{value.size}</Text>
                                </Space>
                              </Row>
                            </Col>
                            <Col md={1}>
                              <span
                                style={{ fontSize: "2em", color: "Tomato" }}
                                className="deleteIcon"
                              >
                                <i id={value. _id} className="far fa-times-circle"  onClick={deleteHandler} ></i>
                              </span>
                            </Col>
                          </Row>
                        </Card>
                        );
                      })}
                  </>
                ) : (
                  <Spinner animation="grow" variant="dark" />
                )}
                {/* Cart items end */}
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
                      <Text>₹ {totalAmount}</Text>{" "}
                    </Col>
                  </Row>
                  {/* <Row className='p-1 ms-1'>
                  <Col md={4}> <Text strong>Discount on MRP</Text></Col>
                  <Col md={{ span: 4, offset: 4 }}><Text>₹ 435</Text> </Col>
                </Row>
                <Row className='p-1 ms-1'>
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
                      <Text strong>₹ {totalAmount}</Text>{" "}
                    </Col>
                  </Row>
                </Card>

                <Button
                  className="m-3"
                  variant="success"
                  disabled={!users.address.length}
                 onClick={checkoutHandler}
                >
                  Proceed To Checkout
                </Button>
                <Text type='danger' className='mt-3'>{checkoutWarning} </Text>
              </Col>
            </>
          ) : (
            <Row>
              <Col className="cartPLace">
                <h4>Please sign in &#128517;</h4>
                <img
                  className="flipkartImage"
                  src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                  alt="signin"
                />
                <Button
                  className="mx-auto px-3 my-3"
                  as={Link}
                  to="/signin"
                  variant="danger"
                >
                  Sign in
                </Button>
              </Col>
            </Row>
          )}

          {/* Delivary address start */}
        </Row>
      </Container>
    </div>
  );
}

export default CartScreen;
