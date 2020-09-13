import React from 'react'
import Socialmedia from './Socialmedia'
import Language from './Language'
import Contact from './Contact'
import Logo from './Logo'
import Searchproduct from './Searchproduct'
import Myacount from './Myacount'

import BrowseCategories from './BrowseCategories'
import Navbar from './Navbar'



export default function Header() {
    return ( 
    <div>
            <div className="back">
                <div className="container ">
      
                    <div className=" row flex-nowrap justify-content-between align-items-center text-white " >   
                      <div className="col-lg-1 ">   <Language /></div> 
                      <div className="col-4 offset-md-4 contact "> <Contact /></div>  
                      <div className="col-2 offset-md-2 socialmedia  ">  <Socialmedia /></div>  
                    </div>  
                </div>
            </div>  
            <div className="container mt-4 py-2">
                <div className="row">
                  <div className="col-lg-2  col-md-2 col-ms-12 ml-2"> <Logo /></div>
                  <div className="col-lg-6 col-md-6 offset-md-1 col-ms-12 searchproduct "> <Searchproduct /></div>
                  <div className="col-lg-2 col-md-3 col-ms-12"><Myacount /></div>
                </div>
                 
            </div> 
            <div className=" border-top ">
                <div className="container mbrowserknapp"  >
                    <div className="row d-flex">
                            <div className="col-lg-3 col-md-3 col-ms-12 py-4 "> <BrowseCategories /></div>
               
                            <div className="col-lg-8 col.md-8 offset-md-1 col-ms-12 "> <Navbar /></div>
               
                    </div>
                </div>
            </div>
            
    </div> 
      
    )
}


