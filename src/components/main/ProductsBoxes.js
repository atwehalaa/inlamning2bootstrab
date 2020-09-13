import React , {useState , component} from 'react'
import { BsHeart ,  BsFillCircleFill , BsArrowLeftRight , BsLock , BsFillStarFill , BsSearch} from "react-icons/bs";
import { IconContext } from "react-icons";

import {  FaRegStar} from 'react-icons/fa'
import './BoxsesArrivals.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';




export default function ProductsBoxes() {
   const [isShown, setIsShown] = useState(false);
   SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

  
    return (   
<div className="">


    <div className="card-deck "> 
      <Swiper 
              spaceBetween={0.5}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              breakpoints={{
                // when window width is >= 640px
               
                // when window width is >= 768px
                768: {
                  slidesPerView: 3,
                  spaceBetween:0,
                  noSwiping: true,
                  allowSlidePrev: true,
                  allowSlideNext: true
               
                },
              }}
      >
            <SwiperSlide>
               <div  style={{width:"350px" , height:"349px"}} className="card position-relative ">
                    <div className="mainCard"   onMouseEnter = {() => setIsShown(true)}
                                   onMouseLeave={() => setIsShown(false)}>
                           <p className="position-absolute mt-2 ml-4 rounded-circle back p-3 text-white size">NEW</p>
                           <img src="./images/Productthumb.png" className="card-img-top position-relative" alt="..." />
                            <div className="card-footer bg-dark">
                                 <small className="text-white ">blue silk flare sleed top</small>
                            </div>
                            {isShown && (
                                <div className="hoverdCard   position-absolute">
                                   <div className=" d-flex justify-content-end">
                                     <div className=" p-2 border rounded-pill mr-2 bg-light">
                                     <IconContext.Provider value={{ size: "20px",  color:"red" ,className: "" }}>
                                                    <div>
                                                   < BsFillCircleFill />
                                                    </div>
                                               </IconContext.Provider>
                                               <IconContext.Provider value={{ size: "20px",  color:"" ,className: "text-muted" }}>
                                                       <div>
                                                            <BsHeart />
                                                         </div>
                                                 </IconContext.Provider>
                                                 <IconContext.Provider value={{ size: "20px",  color:"" ,className: "text-muted" }}>
                                                         <div>
                                                             <BsArrowLeftRight />
                                                            </div>
                                                   </IconContext.Provider>
                                                 <IconContext.Provider value={{ size: "20px",  color:"" ,className: "text-muted" }}>
                                                       <div>
                                                          <BsSearch/>
                                                         </div>
                                                  </IconContext.Provider>
                                                   <IconContext.Provider value={{ size: "20px",  color:"" ,className: "text-muted" }}>
                                                         <div>
                                                           <BsLock  />
 
                                                         </div>
                                                      </IconContext.Provider>
                                  
                                     </div>
                                  </div>
                                  <div className="bb   d-flex flex-column flex-wrap py-4 mt-4 ml-4">
                                       <div> New look mens coat </div>
                                       <div className="border rounded px-1" style={{width:"75px"}} >Fashion</div>
                                        <div>€220-00</div>
                                        <div className="d-flex justify-content-between">
                                                <div className="color">€190.00</div>
                                                <IconContext.Provider value={{ size: "20px",  color:"LightSeaGreen"  , className: "justify-content-end ,mr-2 " }}>
                                                         <div>
                                                           <BsFillStarFill  />
                                                           <BsFillStarFill  />
                                                           <BsFillStarFill  />
                                                           <BsFillStarFill  />
                                                           <FaRegStar  />
                                                         
 
                                                         </div>
                                                    </IconContext.Provider>
                                                    
                                  
                                  
                                                </div>
                                  </div>
                                              
        

                                </div> 
                                         )} 
           
                           
                    </div>
                   
                  
              </div>
            </SwiperSlide>
            <SwiperSlide>
               <div  style={{width:"350px" , height:"349px"}} className="card position-relative ">
                    <div className="mainCard"   onMouseEnter={() => setIsShown(true)}
                                   onMouseLeave={() => setIsShown(false)}>
                           <p className="position-absolute mt-2 ml-4 rounded-circle back p-3 text-white size">NEW</p>
                           <img src="./images/Productthumb.png" className="card-img-top position-relative" alt="..." />
                            <div className="card-footer bg-dark">
                                 <small className="text-white ">blue silk flare sleed top</small>
                            </div>
                            {isShown && (
                                <div className="hoverdCard   position-absolute">
                                   <div className=" d-flex justify-content-end">
                                     <div className=" p-2 border rounded-pill mr-2 bg-light">
                                     <IconContext.Provider value={{ size: "20px",  color:"red" ,className: "" }}>
                                                    <div>
                                                   < BsFillCircleFill />
                                                    </div>
                                               </IconContext.Provider>
                                               <IconContext.Provider value={{ size: "20px",  color:"" ,className: "text-muted" }}>
                                                       <div>
                                                            <BsHeart />
                                                         </div>
                                                 </IconContext.Provider>
                                                 <IconContext.Provider value={{ size: "20px",  color:"" ,className: "text-muted" }}>
                                                         <div>
                                                             <BsArrowLeftRight />
                                                            </div>
                                                   </IconContext.Provider>
                                                 <IconContext.Provider value={{ size: "20px",  color:"" ,className: "text-muted" }}>
                                                       <div>
                                                          <BsSearch/>
                                                         </div>
                                                  </IconContext.Provider>
                                                   <IconContext.Provider value={{ size: "20px",  color:"" ,className: "text-muted" }}>
                                                         <div>
                                                           <BsLock  />
 
                                                         </div>
                                                      </IconContext.Provider>
                                  
                                     </div>
                                  </div>
                                  <div className="bb   d-flex flex-column flex-wrap py-4 mt-4 ml-4">
                                       <div> New look mens coat </div>
                                       <div className="border rounded px-1" style={{width:"75px"}} >Fashion</div>
                                        <div>€220-00</div>
                                        <div className="d-flex justify-content-between">
                                                <div className="color">€190.00</div>
                                                <IconContext.Provider value={{ size: "20px",  color:"LightSeaGreen"  , className: "justify-content-end ,mr-2 " }}>
                                                         <div>
                                                           <BsFillStarFill  />
                                                           <BsFillStarFill  />
                                                           <BsFillStarFill  />
                                                           <BsFillStarFill  />
                                                           <FaRegStar  />
                                                         
 
                                                         </div>
                                                    </IconContext.Provider>
                                                    
                                  
                                  
                                                </div>
                                  </div>
                                       
        

                                </div> 
                                         )} 
           
                           
                    </div>
                   
                  
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{width:"350px" ,  height:"349px"}}  className="card position-relative ">
                    <div className="mainCard"   onMouseEnter={() => setIsShown(true)}
                                   onMouseLeave={() => setIsShown(false)}>
                           <p className="position-absolute mt-2 ml-4 rounded-circle back p-3 text-white size">NEW</p>
                           <img src="./images/Productthumb.png" className="card-img-top position-relative" alt="..." />
                            <div className="card-footer bg-dark">
                                 <small className="text-white ">blue silk flare sleed top</small>
                            </div>
                            {isShown && (
                                <div className="hoverdCard   position-absolute">
                                   <div className=" d-flex justify-content-end">
                                     <div className=" p-2 border rounded-pill mr-2 bg-light">
                                     <IconContext.Provider value={{ size: "20px",  color:"red" ,className: "" }}>
                                                    <div>
                                                   < BsFillCircleFill />
                                                    </div>
                                               </IconContext.Provider>
                                               <IconContext.Provider value={{ size: "20px",  color:"black" ,className: "" }}>
                                                       <div>
                                                            <BsHeart />
                                                         </div>
                                                 </IconContext.Provider>
                                                 <IconContext.Provider value={{ size: "20px",  color:"black" ,className: "" }}>
                                                         <div>
                                                             <BsArrowLeftRight />
                                                            </div>
                                                   </IconContext.Provider>
                                                 <IconContext.Provider value={{ size: "20px",  color:"black" ,className: "" }}>
                                                       <div>
                                                          <BsSearch/>
                                                         </div>
                                                  </IconContext.Provider>
                                                   <IconContext.Provider value={{ size: "20px",  color:"black" ,className: "" }}>
                                                         <div>
                                                           <BsLock  />
 
                                                         </div>
                                                      </IconContext.Provider>
                                  
                                     </div>
                                  </div>
                                  <div className="bb   d-flex flex-column flex-wrap py-4 mt-4 ml-4">
                                       <div> New look mens coat </div>
                                       <div className="border rounded px-1" style={{width:"75px"}} >Fashion</div>
                                        <div>€220-00</div>
                                        <div className="d-flex justify-content-between">
                                                <div className="color">€190.00</div>
                                                <IconContext.Provider value={{ size: "20px",  color:"LightSeaGreen"  , className: "justify-content-end ,mr-2 " }}>
                                                         <div>
                                                           <BsFillStarFill  />
                                                           <BsFillStarFill  />
                                                           <BsFillStarFill  />
                                                           <BsFillStarFill  />
                                                           <FaRegStar  />
                                                         
 
                                                         </div>
                                                    </IconContext.Provider>
                                                    
                                  
                                  
                                                </div>
                                  </div>
                                     
                                              
        

                                </div> 
                                         )} 
           
                           
                    </div>
                   
                  
              </div>
            </SwiperSlide>
            <SwiperSlide>
               <div  style={{width:"350px" , height:"349px"}} className="card position-relative ">
                    <div className="mainCard"   onMouseEnter={() => setIsShown(true)}
                                   onMouseLeave={() => setIsShown(false)}>
                           <p className="position-absolute mt-2 ml-4 rounded-circle back p-3 text-white size">NEW</p>
                           <img src="./images/Productthumb.png" className="card-img-top position-relative" alt="..." />
                            <div className="card-footer bg-dark">
                                 <small className="text-white ">blue silk flare sleed top</small>
                            </div>
                            {isShown && (
                                <div className="hoverdCard   position-absolute">
                                   <div className=" d-flex justify-content-end">
                                     <div className=" p-2 border rounded-pill mr-2 bg-light">
                                     <IconContext.Provider value={{ size: "20px",  color:"red" ,className: "" }}>
                                                    <div>
                                                   < BsFillCircleFill />
                                                    </div>
                                               </IconContext.Provider>
                                               <IconContext.Provider value={{ size: "20px",  color:"" ,className: "text-muted" }}>
                                                       <div>
                                                            <BsHeart />
                                                         </div>
                                                 </IconContext.Provider>
                                                 <IconContext.Provider value={{ size: "20px",  color:"" ,className: "text-muted" }}>
                                                         <div>
                                                             <BsArrowLeftRight />
                                                            </div>
                                                   </IconContext.Provider>
                                                 <IconContext.Provider value={{ size: "20px",  color:"" ,className: "text-muted" }}>
                                                       <div>
                                                          <BsSearch/>
                                                         </div>
                                                  </IconContext.Provider>
                                                   <IconContext.Provider value={{ size: "20px",  color:"" ,className: "text-muted" }}>
                                                         <div>
                                                           <BsLock  />
 
                                                         </div>
                                                      </IconContext.Provider>
                                  
                                     </div>
                                  </div>
                                  <div className="bb ml-4">
                                       <div> New look mens coat </div>
                                       <div border >Fashion</div>
                                        <div>€220-00</div>
                                        <div className="color">€190.00</div>
                                  </div>
                                              
        

                                </div> 
                                         )} 
           
                           
                    </div>
                   
                  
              </div>
            </SwiperSlide>
            <SwiperSlide>
               <div  style={{width:"350px" , height:"349px"}} className="card position-relative ">
                    <div className="mainCard"   onMouseEnter={() => setIsShown(true)}
                                   onMouseLeave={() => setIsShown(false)}>
                           <p className="position-absolute mt-2 ml-4 rounded-circle back p-3 text-white size">NEW</p>
                           <img src="./images/Productthumb.png" className="card-img-top position-relative" alt="..." />
                            <div className="card-footer bg-dark">
                                 <small className="text-white ">blue silk flare sleed top</small>
                            </div>
                            {isShown && (
                                <div className="hoverdCard   position-absolute">
                                   <div className=" d-flex justify-content-end">
                                     <div className=" p-2 border rounded-pill mr-2 bg-light">
                                     <IconContext.Provider value={{ size: "20px",  color:"red" ,className: "" }}>
                                                    <div>
                                                   < BsFillCircleFill />
                                                    </div>
                                               </IconContext.Provider>
                                               <IconContext.Provider value={{ size: "20px",  color:"" ,className: "text-muted" }}>
                                                       <div>
                                                            <BsHeart />
                                                         </div>
                                                 </IconContext.Provider>
                                                 <IconContext.Provider value={{ size: "20px",  color:"" ,className: "text-muted" }}>
                                                         <div>
                                                             <BsArrowLeftRight />
                                                            </div>
                                                   </IconContext.Provider>
                                                 <IconContext.Provider value={{ size: "20px",  color:"" ,className: "text-muted" }}>
                                                       <div>
                                                          <BsSearch/>
                                                         </div>
                                                  </IconContext.Provider>
                                                   <IconContext.Provider value={{ size: "20px",  color:"" ,className: "text-muted" }}>
                                                         <div>
                                                           <BsLock  />
 
                                                         </div>
                                                      </IconContext.Provider>
                                  
                                     </div>
                                  </div>
                                  <div className="bb ml-4">
                                       <div> New look mens coat </div>
                                       <div border >Fashion</div>
                                        <div>€220-00</div>
                                        <div className="color">€190.00</div>
                                  </div>
                                              
        

                                </div> 
                                         )} 
           
                           
                    </div>
                   
                  
              </div>
            </SwiperSlide>
            <SwiperSlide>
               <div  style={{width:"350px" , height:"349px"}} className="card position-relative ">
                    <div className="mainCard"   onMouseEnter={() => setIsShown(true)}
                                   onMouseLeave={() => setIsShown(false)}>
                           <p className="position-absolute mt-2 ml-4 rounded-circle back p-3 text-white size">NEW</p>
                           <img src="./images/Productthumb.png" className="card-img-top position-relative" alt="..." />
                            <div className="card-footer bg-dark">
                                 <small className="text-white ">blue silk flare sleed top</small>
                            </div>
                            {isShown && (
                                <div className="hoverdCard   position-absolute">
                                   <div className=" d-flex justify-content-end">
                                     <div className=" p-2 border rounded-pill mr-2 bg-light">
                                     <IconContext.Provider value={{ size: "20px",  color:"red" ,className: "" }}>
                                                    <div>
                                                   < BsFillCircleFill />
                                                    </div>
                                               </IconContext.Provider>
                                               <IconContext.Provider value={{ size: "20px",  color:"" ,className: "text-muted" }}>
                                                       <div>
                                                            <BsHeart />
                                                         </div>
                                                 </IconContext.Provider>
                                                 <IconContext.Provider value={{ size: "20px",  color:"" ,className: "text-muted" }}>
                                                         <div>
                                                             <BsArrowLeftRight />
                                                            </div>
                                                   </IconContext.Provider>
                                                 <IconContext.Provider value={{ size: "20px",  color:"" ,className: "text-muted" }}>
                                                       <div>
                                                          <BsSearch/>
                                                         </div>
                                                  </IconContext.Provider>
                                                   <IconContext.Provider value={{ size: "20px",  color:"" ,className: "text-muted" }}>
                                                         <div>
                                                           <BsLock  />
 
                                                         </div>
                                                      </IconContext.Provider>
                                  
                                     </div>
                                  </div>
                                  <div className="bb ml-4">
                                       <div> New look mens coat </div>
                                       <div border >Fashion</div>
                                        <div>€220-00</div>
                                        <div className="color">€190.00</div>
                                  </div>
                                              
        

                                </div> 
                                         )} 
           
                           
                    </div>
                   
                  
              </div>
            </SwiperSlide>
        
            
      </Swiper>   
    </div>  
   
    
</div>    
   
    )
}
