import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating';
function ProductCard({product}) {
  



    return (
        <Card className='my-3 p-3 rounded'>
<Link to ={`/product/${product._id}`}>
<Card.Img src= {product.imageUrl[0].img}/>
</Link>
<Card.Body>
<Link to ={`/product/${product._id}`}>
<Card.Title as='div'><b>{product.name}</b> </Card.Title>
</Link>
{/* <Card.Text as='div'>
 <Rating value={4} />
</Card.Text> */}
<Card.Text as='div'>
    <strong>
₹ {product.price}
    </strong>
</Card.Text>
</Card.Body>
        </Card>
    )
}

export default ProductCard
