import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Image, Placeholder } from "react-bootstrap";
import { Select, Typography } from 'antd'
import AdressModal from "./CartModal/AdressModal";
import { useSelector, useDispatch } from 'react-redux'
import { userlogged } from "../../redux/userStore/userAction";

import { Link } from 'react-router-dom'
import AddAddressModal from "./CartModal/AddAddressModal";


const { Option } = Select;
const { Text, Title } = Typography;

function CartScreen() {
  // UseStates
  const [changeAddressShow, setChangeAddressShow] = useState(false);
  const [addAddressShow, setAddAddressShow] = useState(false)

  // address states
  const [name, setName] = useState('')
  const [flatNO, setFlatNO] = useState('')
  const [number, setNumber] = useState('')
  const [pincode, setPincode] = useState('')
  const [street, setStreet] = useState('')
  const [district, setDistrict] = useState('')
  const [state, setState] = useState('')
  const [landmark, setLandmark] = useState('')

  // form error states




  const [allAddress, setAllAddress] = useState()
  const [selectedAddressID, setSelectedAddressID] = useState('')
  // const[defaultAddress,setDefualtAddress]=useState('')


  // Redux function
  const { userActive, users } = useSelector(state => state.user)
  const dispatch = useDispatch()


  // console.log('THis is normal ',userActive);
  // =============================Modal controller start===============================

  // Change address modal
  const addressHandleClose = () => setChangeAddressShow(false);
  const addressHandleShow = () => setChangeAddressShow(true);

  // Add address modal
  const addAddressHandleClose = () => setAddAddressShow(false)
  const addAddressHandleShow = () => setAddAddressShow(true)


  const modalAddButtonHandler = () => {

    addressHandleClose()
    setTimeout(() => {

      addAddressHandleShow()
    }, 300)
  }



  // ==================================modal controller end=============================

  // QUANTITY HANDLER START
  const quantityHandler = () => {

  }
  const sizeHandler = () => {

  }

  // Quantity handler end



  useEffect(() => {
    dispatch(userlogged())
    users && setAllAddress(users.address)

  }, [dispatch, selectedAddressID])

  const showAddress = selectedAddressID ? users.address.find(p => p._id === selectedAddressID) : users ? users.address[0] : <Placeholder as="p" animation="glow">
    <Placeholder xs={12} />
  </Placeholder>





  return (
    <div>
      <Container>
        {/* Modalss start */}


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
          flatNO={flatNO}
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



        />

        {/* Modals end */}



        <Row className="mt-5">
          <Title>Shopping Bag <i className="fas fa-shopping-bag"></i> </Title>

          {userActive ? <>
            <Col sm={12} md={8}>
              <Card className="mb-3">
                <Col sm={12} className="mb-3">
                  <Card.Body>
                    <Card.Title>Delivary to</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {showAddress.name}
                    </Card.Subtitle>
                    <Card.Text>
                      <Text>{showAddress.flatNo} ,{showAddress.landmark} ,{showAddress.street} ,{showAddress.district} dist ,{showAddress.state} ,{showAddress.pincode} ,<b>Ph:</b>{showAddress.number}</Text>
                    </Card.Text>
                    <Button variant="outline-danger" size="sm" onClick={addressHandleShow}>
                      Change Address
                    </Button>
                  </Card.Body>
                </Col>
              </Card>

              {/* Cart items start */}
              <Card>
                <Col sm={12} className="p-4">
                  <Row>
                    <Col md={2}>
                      <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRob7O_z9fowFg11bfZDYN-SoFLcVdbIlFKWQ&usqp=CAU"
                        alt="product image"
                        fluid
                        rounded
                      />
                    </Col>
                    <Col md={9}>
                      <Card.Title>Shirt</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Men's Top wear
                      </Card.Subtitle>
                      <Card.Text>Very colorful T-shirt in the world</Card.Text>
                      <Text strong>₹ 435</Text>

                      {/* QUANTITY SELECTOR STRAT */}

                      <Row >
                        <Col>
                          <Select className='mb-3' defaultValue={1} style={{ width: 120 }} onChange={quantityHandler}>
                            < Option value={1}>{1}</Option>
                            <Option value={2}>{2}</Option>

                          </Select>
                          <Card.Text>Select quantity</Card.Text>
                        </Col>
                        <Col>
                          <Select className='mb-3' defaultValue={'small'} style={{ width: 120 }} onChange={sizeHandler}>
                            <Option value="jack">small</Option>
                            <Option value="jack">large</Option>
                            <Option value="jack">medium</Option>
                          </Select>
                          <Card.Text>Select size</Card.Text>
                        </Col>
                      </Row>


                      {/* QUANTITY SELECTOR END */}



                    </Col>
                    <Col md={1}>
                      <span style={{ fontSize: '2em', color: 'Tomato' }}>
                        <i className="far fa-times-circle"></i>
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Card>

              {/* Cart items end */}
            </Col>
            {/* Delivary address end */}
            <Col sm={12} md={4} >


              <Card>
                <Col sm={12} className='p-4'>
                  <Card.Title>
                    PRICE DETAILS <small>(3) ITEMS</small>
                  </Card.Title>
                  <hr />
                </Col>

                <Row className='p-1 ms-1'>
                  <Col md={4}> <Text strong>Total MRP</Text></Col>
                  <Col md={{ span: 4, offset: 4 }}><Text>₹ 435</Text> </Col>
                </Row>
                <Row className='p-1 ms-1'>
                  <Col md={4}> <Text strong>Discount on MRP</Text></Col>
                  <Col md={{ span: 4, offset: 4 }}><Text>₹ 435</Text> </Col>
                </Row>
                <Row className='p-1 ms-1'>
                  <Col md={4}> <Text strong>Coupen Discount</Text></Col>
                  <Col md={{ span: 4, offset: 4 }}><Text>₹ 435</Text> </Col>
                </Row>
                {/* <Row className='p-1 ms-1'>
    <Col md={4}> <Text strong>Convienience Fee</Text></Col>
    <Col md={{ span: 4, offset: 4 }}><Text>₹ 435</Text> </Col>
  </Row> */}
                <hr />

                <Row className='p-1 ms-1'>
                  <Col md={4}> <Text strong>Grand Total</Text></Col>
                  <Col md={{ span: 4, offset: 4 }}><Text strong>₹ 435</Text> </Col>
                </Row>
              </Card>


              <Button className='m-3' variant="success">Proceed To Checkout</Button>
            </Col>
          </> : <Row>
            <Col className='cartPLace' >
              <h4>Please sign in &#128517;</h4>
              <img className='flipkartImage' src='https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90' alt='signin' />
              <Button className='mx-auto px-3 my-3' as={Link} to='/signin' variant='danger'>Sign in</Button>
            </Col>
          </Row>}



          {/* Delivary address start */}

        </Row>
      </Container>
    </div>
  );
}

export default CartScreen;
