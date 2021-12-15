import React from 'react'
import {Modal,Button,Row,Col,Form} from 'react-bootstrap'
import   {Typography, Space} from 'antd'



function AdressModal({changeAddressShow, addressHandleClose,address,setSelectedAddressID,addAddressHandleShow,modalAddButtonHandler}) {
  const { Text} = Typography;
  





    
 
    return (
      <>
    
  
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
   {address&&address.map((value)=>{ 
   return   <Col className='ms-3 d-flex' sm={12} key={value._id}>
       <Col sm={1}>
        <Form.Check
          type="radio"
          name="addresses"
          id={value._id}

          onChange={(e)=>{setSelectedAddressID(e.target.id)
            addressHandleClose()
          
          }}
        />
       
       </Col>
       <Col sm={11}>

    
         <Space direction='vertical'>
<Text strong>{value.name}</Text>
<Text>{value.flatNo} ,{value.landmark} ,{value.street} ,{value.district} dist ,{value.state} ,{value.pincode} ,<b>Ph:</b>{value.number}</Text>
         </Space>
       </Col>
      </Col>  })} 


    </Form.Group>
  </fieldset>






          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={addressHandleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={modalAddButtonHandler} >Add new Address</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
 export default AdressModal