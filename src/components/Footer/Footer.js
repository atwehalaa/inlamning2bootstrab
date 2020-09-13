import React from 'react'
import ContactInfo from './ContactInfo'
import UsefulLinks from './UsefulLinks'
import Kenkata from './Kenkata'
import RecentInstagram from './RecentInstagram'
import Sist from './Sist'
import Boxes from './Box'
import Box from './Box'








export default function Footer() {
    return (
     <div>
        
         
        
        
        <div className="backgroundFlash p-4" >
             <div className="container">
                 <div className=" row d-flex  align-items-center ">
                     <div className="col-lg-3 col-md-6 col-ms-12"><Kenkata /></div> 
                     <div className="col-lg-3 col-md-6 col-ms-12"><ContactInfo /></div> 
                     <div className="col-lg-3 col-md-6 col-ms-12"><UsefulLinks /></div> 
                     <div className="col-lg-3 col-md-6 col-ms-12"><RecentInstagram /></div> 

                 </div>
             </div>
           
           
          
        </div>
        <Sist />
       
     
        
     </div>
    )
}

