
import React , {Component} from 'react'
import {IconContext} from 'react-icons'
import {  FaRegStar} from 'react-icons/fa'
import { BsFillStarFill } from "react-icons/bs";
import { ImQuotesRight } from "react-icons/im";
import Swiper from 'react-id-swiper';
import './carousel.css'






export default function Carousel() { 
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
      
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 10,
    
  }
  
  

  return(
    <div  className="backgroundFlash mt-4" style={{height:"717px"}}>
      <Swiper {...params}>
          

            <div className="swiper-slide ">
       
              <div className="container text-center" >
                  <IconContext.Provider value={{ size: "40px",  color:"LightSeaGreen"  , className: "justify-content-center" }}>
                      <div>
                         <ImQuotesRight />
                       </div>
                  </IconContext.Provider>
                  <img src="./images/Testimonialthumb.png" className="mt-4 mb-4" />
                  <div>
                               <IconContext.Provider value={{ size: "20px",  color:"LightSeaGreen"  , className: "justify-content-center ," }}>
                                                      <div>
                                                        <BsFillStarFill  />
                                                        <BsFillStarFill  />
                                                        <BsFillStarFill  />
                                                        <BsFillStarFill  />
                                                        <FaRegStar  />
                                                      

                                                      </div>
                                 </IconContext.Provider>
                  </div>
                 <div className="bb color mt-2">JOHNY WESMULLAR</div>
                  <div className="color" style={{fontsize:"14px"}} >  cse, Biotech Inc</div>
                 <div className="size text-white mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br/> industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type <br /> and scrambled it to make a type specimen book. It has survived not only five centuries.</div>
                                  
              </div>
            </div>     
        
          

            <div className="" >

              <div className="container text-center" >
                 <IconContext.Provider value={{ size: "40px",  color:"LightSeaGreen"  , className: "justify-content-center" }}>
                    <div>
                      <ImQuotesRight />
                    </div>
                  </IconContext.Provider>
                  <img src="./images/Testimonialthumb.png" />
                  <div>
                                <IconContext.Provider value={{ size: "20px",  color:"LightSeaGreen"  , className: "justify-content-center ," }}>
                                          <div>
                                            <BsFillStarFill  />
                                            <BsFillStarFill  />
                                            <BsFillStarFill  />
                                            <BsFillStarFill  />
                                            <FaRegStar  />
                                          

                                          </div>
                                 </IconContext.Provider>
                   </div>
                  <div className="bb color">JOHNY WESMULLAR</div>
                  <div className="color" style={{fontsize:"14px" , marginBottom:"33px"}} >  cse, Biotech Inc</div>
                  <div className="size text-white" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br/> industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type <br /> and scrambled it to make a type specimen book. It has survived not only five centuries.</div>
                      
               </div>



              </div>     
            
        <div>Slide 3</div>
      
      </Swiper>
    </div>
    
  
    )
}
