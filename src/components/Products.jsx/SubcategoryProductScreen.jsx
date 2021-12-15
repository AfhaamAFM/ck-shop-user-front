import React, { useEffect, useState } from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'

import ProductCard from '../Map component/ProductCard'
import { useParams } from "react-router-dom";
import { filterProductBySubCategory } from '../../redux/filterProducts/filterProductAction'


function SubcategoryProductScreen() {

    const dispatch = useDispatch()
    const {products} =useSelector(state=>state.filterProduct)
    const { category,subCat } = useParams();
    const[warning,setWarning] =useState('')

console.log(category,subCat);
    useEffect(()=>{
        dispatch(filterProductBySubCategory(category,subCat))
       if(!products){
setWarning(`No items  in ${category}`)

       }
      // eslint-disable-next-line 
    },[category,dispatch])
  
console.log(products);

    return (
        <>
               <Container>

{<h4 className='my-5'>Products for {category}'s {subCat}</h4>}
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

export default SubcategoryProductScreen
