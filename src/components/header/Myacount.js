import React from 'react'
import { BsPerson , BsHeart ,BsLock , BsArrowLeftRight  } from "react-icons/bs";
import { IconContext } from "react-icons";


export default function Myacount() {
    return (
        <div className="d-flex flex-row account  justify-content-between  py-2">
            <div className="d-flex  ">
                <IconContext.Provider value={{ size: "20px",  color:"black" ,className: "" }}>
                    <div>
                       <BsPerson />

                    </div>
                </IconContext.Provider>
               
                 
                <h6 className="px-2 py-1 ">My account</h6>
                
            </div>
            <div className="d-flex p-2 mb-1">
                <IconContext.Provider value={{ size: "20px",  color:"black" ,className: "d-flex" }}>
                    <div>
                            <BsHeart />
                           

                    </div>
                </IconContext.Provider>
                <div className="">
                    <IconContext.Provider value={{ size: "25px",  color:"black"  ,className: "" }}>
                        <div>
                           <BsArrowLeftRight />

                        </div>
                    </IconContext.Provider>
           
                </div>
            </div>

            
            
            <div className="d-flex" >

                <IconContext.Provider value={{ size: "20px", color:"black" ,className: "" }}>
                    <div>
                        <BsLock/>

                    </div>
                </IconContext.Provider>
              
                <h5 className="px-2 py-1">$0.00</h5>
            </div>
        </div>
    )
}
