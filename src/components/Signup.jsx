import React, { useState } from 'react'
import { Form,Button } from 'react-bootstrap';
 import {Link} from 'react-router-dom'




function Signup() {

    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[password,setPassword]=useState('')
    
    function submitHandler(event){
    event.preventDefault();
    
const users={
    name,email,phone,password
}
}


    return (
        <div>
              <div className='login-Container '>
            <div className='login-header p-3 my-3 bg-light' variant='dark'><h2 >Sign up 
            </h2></div>
      <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3 input-container" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3 input-container" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPhone">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="password" placeholder="Enter your Mobile number" onChange={(e)=>setPhone(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
  </Form.Group>
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <div className='button-container'>

  <Button variant="primary" type="submit">
   Register
  </Button>
  </div>
</Form>
<Link to='/signin'>
<p className='pt-2'> Already have an account?</p>
</Link>
        </div>
        </div>
    )
}

export default Signup
