import React from 'react'
import {Alert,Row,Col} from 'react-bootstrap'


function Message(props) {
    return (
       <Row>

           <Col >
           <Alert variant={props.variant}>
{props.children}
  </Alert>
           </Col>
       </Row>
    )
}

export default Message
