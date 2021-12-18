import React from "react";
import { Modal, Row, Col, Form, Button } from "react-bootstrap";

function CoupenModal({ setSelectedCoupen,selectedCoupen, coupenShow, coupenHandleClose,coupenHere, coupenDiscountHandler}) {
  return (
    <>
      <Modal
        show={coupenShow}
        onHide={coupenHandleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Apply Coupen </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Form>
              { coupenHere?<h4>Select Coupen</h4>:<h4>no coupen for this amount<span role="img" aria-label="smiiy">&#128514;</span></h4>}

                <Form.Group as={Row} className="mb-3">
                  {coupenHere.map((value, i) => (
                  <Col sm={10}>
                  <Form.Check
                   key={value._id}
                    type="radio"
                    value= {value.name}
                    label={`${value.name}==>${value.percentage}%`}
                    name="formHorizontalRadios"
                    id={value._id}
                    onChange={(e)=>{setSelectedCoupen(e.target.id)}}
                  />
                </Col>
                  ))}
                 
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={coupenHandleClose}>
            Close
          </Button>
          <Button variant="secondary" disabled={!selectedCoupen} onClick={coupenDiscountHandler}>
            Apply Coupen
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CoupenModal;
