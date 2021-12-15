import React, { useEffect, useState } from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'

import ProductCard from '../Map component/ProductCard'
import {  useParams } from "react-router-dom";
import { searchProduct } from '../../redux/filterProducts/filterProductAction'


function SearchProductScreen() {

    const dispatch = useDispatch()
    const {products} =useSelector(state=>state.filterProduct)
    const { word } = useParams();
    const[warning,setWarning] =useState('')


    useEffect(()=>{
        dispatch(searchProduct(word))
       if(!products){
setWarning(`No items  in ${word}`)

       }
       // eslint-disable-next-line
    },[word,dispatch])
  
console.log(products);

    return (
        <>
               <Container>
{products.length===0?<h1 className='my-5'>No seach result for {word}</h1>:<h1 className='my-5'>Products for {word}</h1>}

<h1 className='my-2'>{warning}</h1>
<Row>
    {products&&products.map((values,i)=>{
   return  <Col sm={12} md={6} lg={4} xl={3} key={i}>

    <ProductCard product={values} key={products._id}/>
    </Col>
            })}
</Row>
</Container>
        </>
    )
}

export default SearchProductScreen
