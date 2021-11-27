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
    warning,
   loading,
    addAddressHandler

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
                            <h6 className='my-2'>Contact details</h6>
                            <Form.Group as={Col} md="12" className="mb-2">
                                <Form.Label>name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"


                                    onChange={(e) => {
                                        setName(e.target.value)
                                        validator.nameInputChangeHandler(e.target.value, setNameError)
                                    }}

                                    onBlur={(e) => {
                                        validator.nameInputBlurHandler(e.target.value, setNameError)
                                    }}

                                />
                                <Text className='my-1' type="danger">{nameError}</Text>
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="mb-2" controlId="validationCustom02">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control

                                    type="text"
                                    placeholder="Last name"




                                    onChange={(e) => {
                                        setNumber(e.target.value)
                                        validator.phoneInputChangeHandler(e.target.value, setNumberError)
                                    }}

                                    onBlur={(e) => {
                                        validator.phoneInputBlurHandler(e.target.value, setNumberError)
                                    }}

                                />
                                <Text className='my-1' type="danger">{numberError}</Text>

                            </Form.Group>


                            <h6 className='my-2'>Address</h6>
                            <Form.Group as={Col} md="12" className="mb-2" controlId="validationCustom05">
                                <Form.Label>Pincode</Form.Label>
                                <Form.Control type="text" placeholder="pincode"

                                    onChange={(e) => {
                                        setPincode(e.target.value)
                                        validator.postalCodeInputChangeHandler(e.target.value, setPincodeError)
                                    }}

                                    onBlur={(e) => {
                                        validator.postalCodeInputBlurHandler(e.target.value, setPincodeError)
                                    }}
                                />
                                <Text className='my-1' type="danger">{pincodeError}</Text>


                            </Form.Group>
                            <Form.Group as={Col} md="12" className="mb-2" controlId="validationCustomUsername">
                                <Form.Label>Address <Text disabled>(House No, Building)</Text></Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend">&#127961;</InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Address(House No, Building, Street, Area)"
                                        aria-describedby="inputGroupPrepend"


                                        onChange={(e) => {
                                            setFlatNo(e.target.value)
                                            validator.nameInputChangeHandler(e.target.value, setFlatNOError)
                                        }}

                                        onBlur={(e) => {
                                            validator.nameInputBlurHandler(e.target.value, setFlatNOError)
                                        }}

                                    />

                                </InputGroup>
                                <Text className='my-1' type="danger">{flatNOError}</Text>
                            </Form.Group>

                            <Form.Group as={Col} md="12" className="mb-2" controlId="validationCustom04">
                                <Form.Label>Locality <Text disabled>(Street name,Area)</Text></Form.Label>
                                <Form.Control type="text" placeholder="State"

                                    onChange={(e) => {
                                        setStreet(e.target.value)
                                        validator.nameInputChangeHandler(e.target.value, setStreetError)
                                    }}

                                    onBlur={(e) => {
                                        validator.nameInputBlurHandler(e.target.value, setStreetError)
                                    }}

                                />
                                <Text className='my-1' type="danger">{streetError}</Text>

                            </Form.Group>

                            <Form.Group as={Col} className="mb-2" md="12" controlId="validationCustom04">
                                <Form.Label>Landmark<Text disabled>(eg: near XYZ bank)</Text></Form.Label>
                                <Form.Control type="text" placeholder="State"


                                    onChange={(e) => {
                                        setLandmark(e.target.value)
                                        validator.nameInputChangeHandler(e.target.value, setLandmarkError)
                                    }}

                                    onBlur={(e) => {
                                        validator.nameInputBlurHandler(e.target.value, setLandmarkError)
                                    }}


                                />
                                <Text className='my-1' type="danger">{landmarkError}</Text>

                            </Form.Group>


                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                <Form.Label>District</Form.Label>
                                <Form.Control type="text" placeholder="District"

                                    onChange={(e) => {
                                        setDistrict(e.target.value)
                                        validator.nameInputChangeHandler(e.target.value, setDistrictError)
                                    }}

                                    onBlur={(e) => {
                                        validator.nameInputBlurHandler(e.target.value, setDistrictError)
                                    }}

                                />
                                <Text className='my-1' type="danger">{districtError}</Text>

                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="State" defaultValue="Kerala"


                                    onChange={(e) => {
                                        setState(e.target.value)
                                        validator.nameInputChangeHandler(e.target.value, setStateError)
                                    }}

                                    onBlur={(e) => {
                                        validator.nameInputBlurHandler(e.target.value, setStateError)
                                    }}



                                />

                                <Text className='my-1' type="danger">{stateError}</Text>
                            </Form.Group>

                        </Row>

                    </Form>
                    <Text className='my-1' type="danger">{warning}</Text>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={addAddressHandleClose}>
                        Close
                    </Button>
                  {loading?<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>
                    :<Button onClick={addAddressHandler} variant="primary" disabled={flatNOError ||
                        numberError ||
                        pincodeError ||
                        nameError ||
                        streetError ||
                        districtError ||
                        stateError ||
                        landmarkError}    >Add new Address</Button>}
                </Modal.Footer>
            </Modal>

        </>
    );
}
export default AddAddressModal