import React from 'react'
import Shoppingfun from './Shoppingfun'
import Support1 from './Support1'
import Boxes from './Boxes'
import ShopBy from './ShopBy'
import NewArrival from './NewArrival'
import BoxesArrivals from './BoxesArrivals'
import Sale from './Sale'
import LearnMore from './LearnMore'
import Carousel from './Carousel'
import FeaturedProducts from './FeaturedProducts'
import ProductsBoxes from './ProductsBoxes'
import Counter from './Counter'
import FlashSale from './FlashSale'
import TopBoxes from './TobBoxes'
import TopSellers from './TopSellers'
import LatestBlog from'./LatestBlog'
import BlogBoxes from'./BlogBoxes'
import Subscribe from './Subscribe'
import Company from './Company'









export default function Main() {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide bg-light mbottom" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                              <Shoppingfun />
                        </div>
    
                    </div>
            </div>
            <div className="">
                 <div className=" row justify-content-center">
                   <div className="col-lg-3   col-md-3 col-ms-12"><Support1 /></div>
                   <div className="col-lg-3 col-md-3 col-ms-12"><Support1 /></div>
                   <div className="col-lg-3 col-md-3 col-ms-12"><Support1 /></div>
                    <div className="col-lg-3 px-4 col-md-3 col-ms-12"><Support1 /></div>
                 
               
                
                 </div>
            </div>
            <ShopBy />
            <Boxes />
            <NewArrival />
            <BoxesArrivals />
            <div className="bg-light mt-4 py-4 hi">
                    <div className="container">
                        <div className="row d-flex">
                          <div className="col-lg-3 col-md-3 col-ms-12 "> <Sale /></div>
                          <div className="col-lg-5 col-md-5 offset-md-3 col-ms-12 align-items-center"> <LearnMore /></div>
                        </div>

                    </div>
            </div>
           
            <FeaturedProducts />
           <div className="py-4 mt-4">  <ProductsBoxes  /></div>
            <div className=" backgroundFlash mt-4 ">
                <div className="container " style={{height:"435px"}}>
                    <div className="row ">
                         <div className="  col-lg-3 col-md-3 col-ms-12">  <FlashSale /></div>
                         <div className="col-lg-3 col-md-3 col-ms-12 offset-md-3 " style={{marginTop:"125px"}}> <Counter /> </div>  
                    </div>
                    
                </div>
            </div>
           <TopSellers /> 
            <TopBoxes />
          <Carousel />
          <LatestBlog />
          <BlogBoxes />
            <div className="bg-light" style={{height:"313px" , marginTop:"114px"}}>
                <div className="container " >
                  <div className="row d-flex justify-content-between align-items-center">
                     <div className="col-lg-6 col-md-6 col-ms-12 subscribe"> <Subscribe /></div>
                     <div className="col-lg-6 col-md-6 col-ms-12">  <img className="subs" src="./images/Backgroundimage.png" /> </div>
                  </div>
                  
                 
                  
                </div>
            </div>
          <Company /> 

         </div>

          
       
    )
}
