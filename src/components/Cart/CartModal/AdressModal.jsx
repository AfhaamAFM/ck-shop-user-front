import React,{useState} from 'react'
import {Modal,Button,Row,Col,Form,Card} from 'react-bootstrap'
import   {Typography,space, Space} from 'antd'



function AdressModal({changeAddressShow, addressHandleClose,address}) {
  const { Text,Title } = Typography;
  
    // const handleShow = () => setShow(true);
 address&&console.log(address);
    return (
      <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button> */}
  
        <Modal
          show={changeAddressShow}
          onHide={addressHandleClose}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Select Adress</Modal.Title>
          </Modal.Header>
          <Modal.Body>
         


          <fieldset>
    <Form.Group as={Row} className="mb-3">
     
      <Col className='ms-3 d-flex'>
       <Col sm={1}>


        <Form.Check
          type="radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
       
       </Col>
       <Col sm={11}>

    
         <Space direction='vertical'>
<Text strong>Afhaam k</Text>
<Text type="secondary">Lexus villa,Kakknad,kakknad west p.o,Cochin,Ernakululam,Kerala,676303</Text>
         </Space>
       

       </Col>
       

      
      </Col>
    </Form.Group>
  </fieldset>






          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={addressHandleClose}>
              Close
            </Button>
            <Button variant="primary">Save</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
 export default AdressModal