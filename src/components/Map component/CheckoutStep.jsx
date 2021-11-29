import React from 'react'
import {Nav} from 'react-bootstrap'

function CheckoutStep({step1,step2,step3,step4}) {
    return (
        <div>
            <Nav className='justify-content-center mb-4'>

<Nav.Item>
{
    step1?(
       
        
        <Nav.Link>
            Sign in
        </Nav.Link>
     
    ):(<Nav.Link disabled>Sign in  </Nav.Link>)  }
</Nav.Item>

<Nav.Item>
{
    step2?(
     
        
        <Nav.Link>
            My Bag
        </Nav.Link>
     
    ):(<Nav.Link disabled>My Bag</Nav.Link>)  }
</Nav.Item>
<Nav.Item>
{
    step3?(
      
        
        <Nav.Link>
Payment
        </Nav.Link>
        
    ):(<Nav.Link disabled>Payment</Nav.Link>)  }
</Nav.Item>
<Nav.Item>
{
    step4?(
       
        
        <Nav.Link>
            Place order
        </Nav.Link>
      
    ):(<Nav.Link disabled>Place Order</Nav.Link>)  }
</Nav.Item>
            </Nav>
        </div>
    )
}

export default CheckoutStep
