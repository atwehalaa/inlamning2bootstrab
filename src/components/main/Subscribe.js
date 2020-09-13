import React from 'react'


export default function Subscribe() {
    return (
    <div className="subscribe">
         <h3 style={{fontSize:"36px"}}>SUBSCRIBE <span className="color">NOW</span> </h3>
         <p>signup for awesome news about our new products and <br /> know our special discounts on products</p>
        <div className="   mt-3 d-flex justify-content-between align-items-center rounded-pill border rounded-pill p-2" >
              <input type="email" className="border-0" placeholder="Enter email addressen" aria-label="enter email addressen" aria-describedby="button-addon2" /> 
            <button className="btn back text-white rounded-pill  py-1 px-3 size d-flex justify-content-center align-items-center " type="button" id="button-addon2">subscribe</button> 
              
        </div>
   
    </div>
    )
}

