import React, { useEffect } from 'react'
import { Container,Row } from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import { userlogged } from '../redux/userStore/userAction'
import {useSearchParams} from 'react-router-dom'
import { LogoutRounded } from '@mui/icons-material'







function CheckoutPaymentScreen() {

    const dispatch = useDispatch()

// const showAddress = selectedAddressID ? (
//     users.address.find((p) => p._id === selectedAddressID)
//   ) : users ? (
//     users.address[0]
//   ) : (
//     <Placeholder as="p" animation="glow">
//       <Placeholder xs={12} />
//     </Placeholder>
//   );

// Redux 
  // 
  
  const { userActive, users } = useSelector((state) => state.user);

 


// use effects

useEffect(()=>{


dispatch(userlogged())

},[dispatch])








    return (
       <Container>


           <Row className='mt-4'>
               <h1>Select payment method</h1>


           </Row>
       </Container>
    )
}

export default CheckoutPaymentScreen

