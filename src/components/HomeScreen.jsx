import React, { useRef, useState } from "react";
import { Carousel } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { useSelector } from 'react-redux';
import ProductScreen from "./ProductScreen";
import {Container} from 'react-bootstrap'
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper.scss'
// // Import Swiper styles
// import "swiper/scss";
// import "swiper/css/pagination"
// import "swiper/css/navigation"

// // import Swiper core and required modules
// import SwiperCore, {
//   Autoplay,Pagination,Navigation
// } from 'swiper';

// // install Swiper modules
// SwiperCore.use([Autoplay,Pagination,Navigation]);



function HomeScreen() {
  const { loading } = useSelector(state => state.user)

  return (
    <>


<ProductScreen/>

    </>




  )
}

export default HomeScreen
