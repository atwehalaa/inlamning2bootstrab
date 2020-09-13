import React from 'react'
import {IconContext} from 'react-icons'
import { BsChevronCompactDown } from  "react-icons/bs"

export default function Navbar() {
    return (
        <div className="d-flex mt-1">
                <nav className="navbar navbar-expand-lg navbar-light  ">
                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active li-padding li-border">
                                 <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            
                            <li className="nav-item dropdown d-flex li-padding">
                                    <a className="nav-link text-dark " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                             Shop
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                       <a className="dropdown-item" href="#">Action</a>
                                       <a className="dropdown-item" href="#">Another action</a>
                                     <div className="dropdown-divider"></div>
                                              <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                    <div className="mt-2">
                                            <IconContext.Provider value={{ size: "10px",  color:"#20D3C2" ,className: "" }}>
                                                       <div>
                                                          <BsChevronCompactDown />

                                                        </div>
                                             </IconContext.Provider>
                                    </div>
                            </li>
                            <li className="nav-item dropdown d-flex li-padding">
                                    <a className="nav-link  text-dark " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                             Products
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                       <a className="dropdown-item" href="#">Action</a>
                                       <a className="dropdown-item" href="#">Another action</a>
                                     <div className="dropdown-divider"></div>
                                              <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                    <div className="mt-2">
                                            <IconContext.Provider value={{ size: "10px",  color:"#20D3C2" ,className: "" }}>
                                                       <div>
                                                          <BsChevronCompactDown />

                                                        </div>
                                             </IconContext.Provider>
                                    </div>
                            </li>
                            <li className="nav-item dropdown  d-flex li-padding">
                                    <a className="nav-link  text-dark " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Categories
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                       <a className="dropdown-item" href="#">Action</a>
                                       <a className="dropdown-item" href="#">Another action</a>
                                     <div className="dropdown-divider"></div>
                                              <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                    <div className="mt-2">
                                            <IconContext.Provider value={{ size: "10px",  color:"#20D3C2" ,className: "" }}>
                                                       <div>
                                                          <BsChevronCompactDown />

                                                        </div>
                                             </IconContext.Provider>
                                    </div>
                            </li>
                            <li className="nav-item dropdown d-flex li-padding">
                                    <a className="nav-link  text-dark  " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                             Pages
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                       <a className="dropdown-item" href="#">Action</a>
                                       <a className="dropdown-item" href="#">Another action</a>
                                     <div className="dropdown-divider"></div>
                                              <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                    <div className="mt-2">
                                            <IconContext.Provider value={{ size: "10px",  color:"#20D3C2" ,className: "" }}>
                                                       <div>
                                                          <BsChevronCompactDown />

                                                        </div>
                                             </IconContext.Provider>
                                    </div>
                            </li>
                            <li className="nav-item active li-padding px-2">
                                 <a className="nav-link" href="#">Blog <span className="sr-only">(current)</span></a>
                            </li>
      
      
      
      
                         </ul>
                         
                        </div>
                        <button className="btn size text-white px-4 rounded-pill back my-3 ml-4 SPECIALOFFER" type="submit">SPECIAL OFFER</button>
      
                    
                   
                 </nav>
                
        </div>
    )
}
