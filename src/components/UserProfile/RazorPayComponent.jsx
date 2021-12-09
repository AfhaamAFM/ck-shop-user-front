import React,{useState} from 'react'
import axios from 'axios';
import {Button,ListGroup,Row} from 'react-bootstrap'


const loadRazorPay=(src)=>{
  return new Promise(resolve=>{
  const script = document.createElement('script')
  script.src=src
  document.body. appendChild(script)

  script.onload=()=>{
    resolve(true)
  }
  script.onerror=()=>{

    resolve(false)
  }
  })
}







function RazorPayComponent({totalAmount,successPaymentHandler}) {

async function showRazorPAy(){


  const result =await loadRazorPay('https://checkout.razorpay.com/v1/checkout.js')
  if(!result){
    alert('fail')
    return
  }
  
  const { data: key } = await axios.get('/config/razor')
  
  const {data} = await axios.get(`/order/razorpay/payAmount/${totalAmount}`)
  console.log(data)
  
  var options = {
    "key": key, // Enter the Key ID generated from the Dashboard
    "amount": data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": data.currency,
    "name": "CK shop",
    "description": "Pay for the items you buyed",
    "image": "https://t3.ftcdn.net/jpg/03/33/17/82/240_F_333178241_L3iK0IGN5SgpSusxX7jdDEI554ebuDy5.jpg",
    "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
  
      successPaymentHandler({id:response.razorpay_payment_id})
  
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature)
    },
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
  };
  var paymentObject = new window.Razorpay(options);
  paymentObject.open();
  paymentObject.on('payment.failed', function (response){
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
});
  }
  return (
   
  
        <Row>

      <Button variant='info' onClick={showRazorPAy} className='px-5 py-2'>
    PAY  ₹{totalAmount}
</Button>
<p className='m-3'>Pay with RazorPay</p>
        </Row>
  );
}

export default RazorPayComponent;
