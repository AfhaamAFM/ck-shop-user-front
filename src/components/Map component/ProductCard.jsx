import React, { useEffect, useState } from 'react'
import { Card,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating';
import {Space,Typography} from 'antd'
function ProductCard({product}) {
  
const {Text} = Typography


    return (
        <Card className='my-3 p-1 rounded' style={{minHeight:'25rem'}} >
<Link to ={`/product/${product._id}`}>
<Card.Img style={{height:'17rem'}} src= {product.imageUrl[0].img}/>
</Link>
<Card.Body>
<Link to ={`/product/${product._id}`}>
<Card.Title as='div'><b>{product.name}</b> </Card.Title>
</Link>
{/* <Card.Text as='div'>
 <Rating value={4} />
</Card.Text> */}
<Row>
    {product.isOffer?
    
    <Space direction='vertical'>
   <Card.Text as='div' className='priceHolder'>
       ₹{Math.round(product.offerPrice)}
       </Card.Text>
       <Space direction='horizontal'>

           <Card.Text as='div' className='priceHolder1'>
           ₹{product.price}
           </Card.Text>
           <Text type="success">{product.offer.percentage}% off </Text>
       </Space>
    </Space>

    :
    <Card.Text as='div' className='priceHolder'>
       
    ₹{ product.price}
       
    </Card.Text>}
</Row>
</Card.Body>
        </Card>
    )
}

export default ProductCard
