import React from 'react'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './BlogBoxes.css'

// Import Swiper styles


export default function FeaturedProducts() {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

 


 
 
    return (
  <div className=" card-2 mt-4">
      <Swiper 
              spaceBetween={0}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              breakpoints={{
                // when window width is >= 640px
               
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                  spaceBetween:0,
                  noSwiping: true,
                  allowSlidePrev: true,
                  allowSlideNext: true
               
                },
              }}
              
            
              
              
            
              
      >
        
        <SwiperSlide>
                    
                
                    <div className="row d-flex  justify-content-around">
                       <div className="col-lg-4 px-4 blog1  col-md-4 col-ms-12 ">
                              <img src="./images/Blogthumb.png" />
                        </div>
                         <div className="col-lg-5 offset-md-1 px-1 mr-4 blog  col-md-5 col-ms-12 d-flex align-items-center" style={{marginLeft:"-16px"}}>
                                <div className="backgroundFlash rounded pb-4 pr-4 ">
                                     <div className="back color ml-4 text-white d-flex flex-column justify-content-center  align-items-center" style={{height:"77px" , width:"60px"}}>
                                          <h2 className="py-2">29</h2>
                                           <p className="">MAR</p>
                                </div>
                                 <p className="text-white ml-4" style={{fontSize:"14px"}}>BY <u>Adam moore</u></p>
                                 <p className="color ml-4">A beatiful scenery in the  world we are missing </p>
                                 <div className="d-flex ml-4">
                                        <p className="border text-white p-2" style={{fontSize:"14px"}}>Travel</p>
                                        <p className="border text-white p-2 ml-2" style={{fontSize:"14px"}}>Fashion</p>
                                 </div>
                                    <button type="text" className="btn ml-4 color bg-white border rounded-pill  px-4">Read more</button>
                         </div>
                      </div>
                    </div>
                  </SwiperSlide>
                <SwiperSlide>
                  <div className="row ">
                       <div className="col-lg-4 blog1 col-md-4 col-ms-12 ">
                              <img src="./images/Blogthumb.png" />
                        </div>
                        <div className="col-lg-5 offset-md-1 px-1 blog col-md-5 col-ms-12 d-flex align-items-center">
                                <div className="backgroundFlash rounded pb-4 pr-4 ">
                                     <div className="back color ml-4 text-white d-flex flex-column justify-content-center  align-items-center" style={{height:"77px" , width:"60px"}}>
                                          <h2 className="py-2">29</h2>
                                           <p className="">MAR</p>
                                </div>
                                 <p className="text-white ml-4" style={{fontSize:"14px"}}>BY <u>Adam moore</u></p>
                                 <p className="color ml-4">A beatiful scenery in the  world we are missing </p>
                                 <div className="d-flex ml-4">
                                        <p className="border text-white p-2" style={{fontSize:"14px"}}>Travel</p>
                                        <p className="border text-white p-2 ml-2" style={{fontSize:"14px"}}>Fashion</p>
                                </div>
                                    <button type="text" className="btn ml-4 color bg-white border rounded-pill  px-4">Read more</button>
                        </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>

        
              
                    
        </Swiper>

            
        </div>
    )
}