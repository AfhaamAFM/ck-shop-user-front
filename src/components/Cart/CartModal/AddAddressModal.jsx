import React, { useState } from 'react'
import { Modal, Button, Row, Col, Form, InputGroup } from 'react-bootstrap'
import { Typography, space, Space } from 'antd'
import validator from '../../../simple-react-form-validation-helper/validationHelpers';



function AddAddressModal({
    addAddressHandleClose,
    addAddressShow,
    setName,
    setFlatNo,
    setNumber,
    setPincode,
    setStreet,
    setDistrict,
    setState,
    setLandmark,

  

    // states 




}) {
   

 const { Text, Title } = Typography;


    //   validation handling states
    const [flatNOError, setFlatNOError] = useState('')
    const [numberError, setNumberError] = useState('')
    const [pincodeError, setPincodeError] = useState('')
    const [nameError, setNameError] = useState('')
    const [streetError, setStreetError] = useState('')
    const [districtError, setDistrictError] = useState('')
    const [stateError, setStateError] = useState('')
    const [landmarkError, setLandmarkError] = useState('')

  



    // const handleShow = () => setShow(true);

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button> */}

            <Modal
                show={addAddressShow}
                onHide={addAddressHandleClose}
                backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>



                    <Form>
                        <Row className="mb-3">
                            <h4 className='my-2'>Contact details</h4>
                            <Form.Group as={Col} md="12" className="mb-2">
                                <Form.Label>name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"


                                    onChange={(e) => {
                                        setName(e.target.value)
                                        validator.emailInputChangeHandler(e.target.value,setNameError)
                                        }}
                        
                                        onBlur={(e) => {
                                        validator.emailInputBlurHandler(e.target.value, setNameError)
                                        }}

                                />
                                   <Text type="danger">{nameError}</Text>
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="mb-2" controlId="validationCustom02">
                                <Form.Label>Mobile Numb    const [nameError, setNameError] = useState('')
er</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"




                                    // onChange={(e) => {
                                    //     setEmail(e.target.value)
                                    //     validator.emailInputChangeHandler(e.target.value, setEmailError)
                                    //     }}
                        
                                    //     onBlur={(e) => {
                                    //     validator.emailInputBlurHandler(e.target.value, setEmailError)
                                    //     }}

                                />



                                <h4 className='my-2'>Address</h4>
                                <Form.Group as={Col} md="12" className="mb-2" controlId="validationCustom05">
                                    <Form.Label>Pincode</Form.Label>
                                    <Form.Control type="text" placeholder="pincode" 
                                    
                                    // onChange={(e) => {
                                    //     setEmail(e.target.value)
                                    //     validator.emailInputChangeHandler(e.target.value, setEmailError)
                                    //     }}
                        
                                    //     onBlur={(e) => {
                                    //     validator.emailInputBlurHandler(e.target.value, setEmailError)
                                    //     }}
                                    
                                    
                                    />

                                </Form.Group>
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="mb-2" controlId="validationCustomUsername">
                                <Form.Label>Address <Text disabled>(House No, Building)</Text></Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend">&#127961;</InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Address(House No, Building, Street, Area)"
                                        aria-describedby="inputGroupPrepend"
                                       

                                        // onChange={(e) => {
                                        //     setEmail(e.target.value)
                                        //     validator.emailInputChangeHandler(e.target.value, setEmailError)
                                        //     }}
                            
                                        //     onBlur={(e) => {
                                        //     validator.emailInputBlurHandler(e.target.value, setEmailError)
                                        //     }}


                                    />

                                </InputGroup>
                            </Form.Group>

                            <Form.Group as={Col} md="12" className="mb-2" controlId="validationCustom04">
                                <Form.Label>Locality <Text disabled>(Street name,Area)</Text></Form.Label>
                                <Form.Control type="text" placeholder="State"
                                
                                // onChange={(e) => {
                                //     setEmail(e.target.value)
                                //     validator.emailInputChangeHandler(e.target.value, setEmailError)
                                //     }}
                    
                                //     onBlur={(e) => {
                                //     validator.emailInputBlurHandler(e.target.value, setEmailError)
                                //     }}
                                
                                
                                />

                            </Form.Group>

                            <Form.Group as={Col} className="mb-2" md="12" controlId="validationCustom04">
                                <Form.Label>Landmark<Text disabled>(eg: near XYZ bank)</Text></Form.Label>
                                <Form.Control type="text" placeholder="State"
                                
                                
                                // onChange={(e) => {
                                //     setEmail(e.target.value)
                                //     validator.emailInputChangeHandler(e.target.value, setEmailError)
                                //     }}
                    
                                //     onBlur={(e) => {
                                //     validator.emailInputBlurHandler(e.target.value, setEmailError)
                                //     }}
                                
                                
                                
                                />

                            </Form.Group>


                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                <Form.Label>District</Form.Label>
                                <Form.Control type="text" placeholder="District" 
                                
                                // onChange={(e) => {
                                //     setEmail(e.target.value)
                                //     validator.emailInputChangeHandler(e.target.value, setEmailError)
                                //     }}
                    
                                //     onBlur={(e) => {
                                //     validator.emailInputBlurHandler(e.target.value, setEmailError)
                                //     }}
                                
                                
                                />

                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="State" defaultValue="Kerala" 
                                
                                
                                // onChange={(e) => {
                                //     setEmail(e.target.value)
                                //     validator.emailInputChangeHandler(e.target.value, setEmailError)
                                //     }}
                    
                                //     onBlur={(e) => {
                                //     validator.emailInputBlurHandler(e.target.value, setEmailError)
                                //     }}
                                
                                
                                
                                
                                />

                            </Form.Group>

                        </Row>

                    </Form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={addAddressHandleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Add</Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}
export default AddAddressModal