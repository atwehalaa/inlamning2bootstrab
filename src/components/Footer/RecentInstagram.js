import React from 'react'
import { FaInstagramSquare } from 'react-icons/fa'


export default function RecentInstagram() {
    return (
     <div>
         <h3 className="color bb" style={{marginBottom:"39px"}}>RECENT INSTAGRAM</h3>
         <div className="d-flex justify-content-between" style={{width:"255px"}}>
             <img src="./images/Instagram-1.png" />
             <img src="./images/Instagram-1.png" />
             <img src="./images/Instagram-1.png" />

         </div>
         <div className="d-flex justify-content-between mt-2" style={{width:"255px"}}>
             <img src="./images/Instagram-1.png" />
              <div className="border rounded p-4 back white"  > <FaInstagramSquare  /> </div> 
             <img src="./images/Instagram-1.png" />

         </div>
         <div className="d-flex justify-content-between mt-2" style={{width:"255px"}}>
             <img src="./images/Instagram-1.png" />
             <img src="./images/Instagram-1.png" />
             <img src="./images/Instagram-1.png" />

         </div>

     </div>
    )
}

