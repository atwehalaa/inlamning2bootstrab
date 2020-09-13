import React from 'react'
import { FaFacebookF , FaLinkedin ,FaInstagramSquare, FaDove  , FaFacebookMessenger} from 'react-icons/fa'


export default function Kenkata() {
    return (
      <div>
          <img  src="./images/Logosist.png" / >
          <p className="text-white" style={{marginTop:"30px"}}>Lorem Ipsum is simply dummy text of<br/> the printing and typesetting industry.<br/> Lorem Ipsum has been the <br/> industry's since the 1500s<br/> unknown printer took a galley of type </p>
          <p className="text-white">Follow us</p>
            <div className="d-flex justify-content-between" style={{width:"139px"}}>
                <div  className="color"  >
                   <FaFacebookF/>
                   <FaLinkedin />
                

                </div>
                <div className="color">
                  <FaDove />
                   <FaFacebookMessenger />
                   <FaInstagramSquare />
                </div>
            </div>
     

      </div>
    )
}

