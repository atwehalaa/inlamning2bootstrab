
import React, { Fragment } from 'react'
import './Boxes.css'


export default function Boxes() {
    return (
    <div className="container box ">
            <div className="row">
               <div className="col-sm-12 col-lg-7 col-md-7  ">
                    <div className="row">
                        <div className="col-sm-12 col-lg-2 col-md-2 rounded ">  <div className="square position-relative">S</div> <Fragment> <div className="border bg-dark color position-absolute  px-3" style={{marginTop: "-26px"}}>men</div></Fragment></div>
                        <div className="col-sm-12 col-lg-6 col-md-6 offset-md-2 rounded ">  <div className="vertical ml-2" id="v2">V2</div> <Fragment> <div className="border bg-dark color position-absolute rounded ml-1 px-4" style={{marginTop: "-26px"}}>wemen</div></Fragment></div>
                        <div className="col-sm-12 col-lg-4 col-md-4 pull-right mt-3 rounded h"><div className="horizontal col-ms-12" id="h1">H</div><Fragment> <div className="border bg-dark color position-absolute rounded  px-4"style={{marginTop: "-26px"}} >shoes</div></Fragment></div>
                       <div className="col-sm-12  col-lg-2  col-md-2  offset-4  mt-3 pull-right rounded "> 
                             <div>  <div className="square  rounded " style={{marginLeft: "12px"}}>S</div> <Fragment> <div className="border bg-dark color position-absolute rounded ml-2 px-4"style={{marginTop: "-26px"}} >hats</div></Fragment></div> 
                              <div>  <div className="vertical mt-3 ml-2 sun rounded" id="v2">V2</div><Fragment> <div className="border bg-dark color position-absolute rounded ml-2 px-4"style={{marginTop: "-26px"}} >sunglasses</div></Fragment></div>
                       </div>
                     
                       
                     
                        
                      
                    </div>
                </div>
                <div className="col-sm-12  col-lg-4 col-md-4 ml-4">    
                       <div> <div className="horizontal col-ms-12 col-lg-3 col-md-3 rounded h" id="h1">H</div> <Fragment> <div className="border bg-dark color position-absolute rounded  px-4"style={{marginTop: "-26px"}} >kids</div></Fragment></div>
                        <div className="col-sm-12 col-lg-2 col-md-2 offset-md-7 mt-3 rounded  ">  <div class="square">S</div><Fragment> <div className="border bg-dark color position-absolute rounded  px-4"style={{marginTop: "-26px"}} >watches</div></Fragment></div>
                    </div>
                </div>
            
    </div>
  
          
         
                
                   
        
            
        
        
     
   
       
    )
}