import React   from 'react'

import { FaFacebookF , FaLinkedin ,FaInstagramSquare, FaDove  , FaFacebookMessenger} from 'react-icons/fa'

export default function Socialmedia() {
    return (
        
    
        <div className="d-flex justify-content-between" style={{width:"139px"}}>
            <div >
              <FaFacebookF/>
              <FaLinkedin />
        

            </div>
            <div>
               <FaDove />
               <FaFacebookMessenger />
               <FaInstagramSquare />
            </div>
         </div>
    )

}


