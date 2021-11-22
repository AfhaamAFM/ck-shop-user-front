import React, { useEffect, useState } from 'react'
import { FreeMode } from 'swiper'
import {Row,Col,Image,ListGroup,Card,Button, Container} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { fetchProduct } from '../redux/PRODUCTS/productAction'
import ProductCard from './Map component/ProductCard'
import { Link, useParams } from "react-router-dom";

function ProductScreen() {

const[listProducts,setListProducts]=useState('')
const dispatch = useDispatch()
const {product} =useSelector(state=>state.product)
const { category } = useParams();
const[showProducts,setShowProduct]=useState('')
const[see,setSee]=useState()



useEffect(()=>{
dispatch(fetchProduct())
const check = product.find((p) => p.category === category);
},[])


    return (
        <>
        <Container>

            <h1>Latest Products</h1>
            <Row>
                {product&&product.map((values,i)=>{
               return  <Col sm={12} md={6} lg={4} xl={3} key={i}>
            
                <ProductCard product={values} key={product._id}/>
                </Col>
                        })}
            </Row>
            </Container>
        </>
    )
}

export default ProductScreen
