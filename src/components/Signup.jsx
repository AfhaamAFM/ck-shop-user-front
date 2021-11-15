import React, { useState } from 'react'
import { Form,Button } from 'react-bootstrap';
 import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { fetchUserRequest,fetchUserSuccess,fetchUserError,userVerify,userlogged } from '../redux/userStore/userAction';


import {useSelector,useDispatch} from 'react-redux'


function Signup() {
    const dispatch = useDispatch()
    const {users,error,loading,response}=useSelector(state=>state)
    const navigate =useNavigate()
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[password,setPassword]=useState('')
    const[warning,setWarning]=useState('')
    function submitHandler(event){
    event.preventDefault();



const users={
    name,email,phone,password
}
console.log(users);
dispatch(fetchUserRequest())
axios.post("http://localhost:5000/user/signup/",users).then((res)=>{
    console.log(res.data);
    if(res.data.response){
        setWarning(res.data.response)
    }else{
        setWarning('')
        dispatch(userlogged())
        navigate('/')
    }
}).catch((err)=>{

    dispatch(fetchUserError())
})

}


    return (
        <div>
              <div className='login-Container '>
            <div className='login-header p-3 my-3 bg-light' variant='dark'><h2 >Sign up 
            </h2></div>
      <Form onSubmit={submitHandler}>
          <h4>{warning}</h4>
      <Form.Group className="mb-3 input-container" controlId="formBasicName">
         
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your name" required  onChange={(e)=>setName(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3 input-container" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required  onChange={(e)=>setEmail(e.target.value)} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPhone">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="text" placeholder="Enter your Mobile number" required  onChange={(e)=>setPhone(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" required  onChange={(e)=>setPassword(e.target.value)} />
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
