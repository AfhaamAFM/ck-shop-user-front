import React from 'react'
import { Form,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'

function Signin() {
 const dispatch = useDispatch()
const {error}=useSelector(state=>state)

console.log(error);

    return (
        <div className='login-Container '>
            <div className='login-header p-3 my-3 bg-light' variant='dark'><h2 > Hello User ! 
            </h2></div>
      <Form>
  <Form.Group className="mb-3 input-container" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <div className='button-container'>

  <Button variant="primary" type="submit">
   Sign in
  </Button>
  </div>
  <Link to='/signup'>
<p className='pt-2'>Don't have an account?</p>
</Link>
</Form>
        </div>
    )
}

export default Signin
