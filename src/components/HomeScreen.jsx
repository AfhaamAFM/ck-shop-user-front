import React, { useRef, useState } from "react";
import Loader from "react-loader-spinner";
import { useSelector } from 'react-redux';

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
    const {loading}=useSelector(state=>state)

    return (
        <>
        <div className='text-center'>
       {loading&&  <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
/>
        }
        </div>

<>

        {/* <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
  "delay": 2500,
  "disableOnInteraction": false
}} pagination={{
  "clickable": true
}} navigation={true} className="mySwiper">
  <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
  </Swiper> */}


</>

        </>
    )
}

export default HomeScreen
