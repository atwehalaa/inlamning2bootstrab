import React from 'react'
import { BsSearch } from "react-icons/bs";


    


export default function Searchproduct() {
    return (

            <div className=" categories border rounded-pill  ">
                <div className="input-group  ">
                  <input type="text" className="form-control searchproducts border-0 "  aria-label="Text input with dropdown button" placeholder="search product.." />
                    <div className="input-group-append">
                       <button className="btn form-control border-left  heightcategories dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</button>   
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button className="dropdown-item" type="button">Action</button>
                                    <button className="dropdown-item" type="button">Another action</button>
                                    <button className="dropdown-item" type="button">Something else here</button>    
                        </div>
                        
                    </div>
                    <button className=" btn border-left text-darksearchicon "> <BsSearch /> </button>
                    
                </div>
               
            
                


            </div>
            
      
    )
}



