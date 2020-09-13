import React from 'react'
import { IconContext } from 'react-icons';
import { BsListNested  } from "react-icons/bs";
import { BsChevronCompactDown  } from  "react-icons/bs"

export default function BrowseCategories() {
    return (
    <div>
        <div className=" d-flex back py-1" >
            <div className="  p-2">
                    <IconContext.Provider value={{ size: "20px",  color:"white" ,className: "" }}>
                        <div>
                             <BsListNested />

                        </div>
                    </IconContext.Provider>
            </div>
            <div className="">
                <div className="btn-group  ">
                    
                   
                    <button type="button" className="btn text-white bb" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         BrowseCategories
                    </button>
    
                    <div className="dropdown-menu dropdown-menu-right">
                        <button className="dropdown-item" type="button">Action</button>
                        <button className="dropdown-item" type="button">Another action</button>
                        <button className="dropdown-item" type="button">Something else here</button>
                    </div>
                 
                </div>
            </div>
            <div className="ml-4 mt-1">
                <IconContext.Provider value={{ size: "15px",  color:"white" ,className: "" }}>
                        <div>
                             <BsChevronCompactDown />
                         </div>
                </IconContext.Provider>
            </div>
            
        </div>
           
     
    </div>
    )
}
