import React from 'react'
import {IconContext} from 'react-icons'
import { FaLongArrowAltUp } from "react-icons/fa"

export default function Aicon() {
    return (
       <div>
           <div className="border p-2 rounded">
               <IconContext.provider value={{color:"white"}}>
                   <div>
                       <FaLongArrowAltUp />
                   </div>
               </IconContext.provider>

           </div>

       </div>
    )
}