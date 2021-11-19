import React, { useEffect } from 'react'
import { FreeMode } from 'swiper'
import {Row,Col,Image,ListGroup,Card,Button} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { fetchProduct } from '../redux/PRODUCTS/productAction'
import ProductCard from './Map component/ProductCard'


function ProductScreen() {


const dispatch = useDispatch()
const {product} =useSelector(state=>state.product)





useEffect(()=>{
dispatch(fetchProduct())


},[])







    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {product.map((values)=>{
               return  <Col sm={12} md={6} lg={4} xl={3}>
            
                <ProductCard product={values} key={product._id}/>
                </Col>
})}
            </Row>
        </>
    )
}

export default ProductScreen
