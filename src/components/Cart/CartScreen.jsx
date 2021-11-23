import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import   {Select,Typography} from 'antd'
const { Option } = Select;
const { Text, Link,Title } = Typography;



function CartScreen() {

// QUANTITY HANDLER START
const quantityHandler =()=>{

}
const sizeHandler =()=>{

}




// Quantity handler end











  return (
    <div>
      <Container>
        <Row className="mt-5">
            <Title>Shopping Bag <i className="fas fa-shopping-bag"></i> </Title>
          {/* Delivary address start */}
          <Col sm={12} md={8}>
            <Card className="mb-3">
              <Col sm={12} className="mb-3">
                <Card.Body>
                  <Card.Title>Delivary to</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Afhaam k
                  </Card.Subtitle>
                  <Card.Text>
                    Carnival infopark,Cochin,Kakkanad,Kerala,676303
                  </Card.Text>
                  <Button variant="outline-danger" size="sm">
                    Add new Address
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
                  <span style={{fontSize: '2em', color: 'Tomato'}}>
                    <i class="far fa-times-circle"></i> 
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
        </Row>
      </Container>
    </div>
  );
}

export default CartScreen;
