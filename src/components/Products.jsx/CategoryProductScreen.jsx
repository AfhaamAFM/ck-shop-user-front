import React, { useEffect, useState } from 'react'

import {Row,Col, Container} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'

import ProductCard from '../Map component/ProductCard'
import {  useParams } from "react-router-dom";
import { filterProductBycategory } from '../../redux/filterProducts/filterProductAction'


function CategoryProductScreen() {

    const dispatch = useDispatch()
    const {products} =useSelector(state=>state.filterProduct)
    const { category } = useParams();
    const[warning,setWarning] =useState('')


    useEffect(()=>{
        dispatch(filterProductBycategory(category))
       if(!products){
setWarning(`No items  in ${category}`)

       }
    // eslint-disable-next-line   
    },[category,dispatch])
  


    return (
        <>
               <Container>

{<h1 className='my-5'>Products for {category}</h1>}
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

export default CategoryProductScreen
