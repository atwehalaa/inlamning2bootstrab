import React from 'react'
import './Sale.css'

export default function Sale() {
    return (
        <div className="back hi   d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex text-white">
                     <div className="d-flex align-items-center">
                     <h3>30%</h3>
                     <h6>OFF</h6></div>
           </div>
          <div className="py-2 text-white"> <p className="size"> FOR NEW CUSTOMER</p></div> 
          <div className="py-2 text-white"><button className="btn rounded-pill bg-dark text-white bb p-3">SHOP NOW</button></div>
        </div>
    )
}

