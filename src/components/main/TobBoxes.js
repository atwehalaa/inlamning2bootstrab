import React from 'react'


export default function TopBoxes() {
    return (
       <div className="container" >
           <div className="row m22" >
                <div className="col-lg-6 col-md-6 sellers col-ms-12 bg-light ii rounded" style={{height:"700px" , width:"550px"}}  >
                   <img src="./images/Bexim.png"  className="bg-white mt-4 rounded" />
                   <div>
                          <img src="./images/Productthumbman.png" className="position-relative img11" style={{marginTop:"-53px"}} style={{width:"550px" , height:"600px"}}   />
                          <p className="text-white bg-dark p11 py-2 px-2 rounded position-absolute " style={{ width:"569px" , marginTop:"-4px" , marginLeft:"-15px"}} > mens denim shirt full</p>
                   </div>
                  
                </div>
               
                <div className="col-lg-6 col-md-6 col-ms-12 m11">
                   <div>
                       <div className=" bg-light sellers rounded "style={{width:"550px" , height:"340px"}} >
                            <img src="./images/Bexim.png"  className="bg-white  mt-2 p-3 ml-2 rounded" />
                            <img src="./images/Productthumb1.png" className="img11" style={{  height:"225px"}} />
                            <p className="text-white bg-dark p11 rounded py-2 px-2 ml-2" > mens denim shirt full</p>
                  
                        </div>
                        <div className=" bg-light rounded sellers thumb mt-3" style={{width:"550px" , height:"340px"}} >
                            <img src="./images/Bexim.png"  className="bg-white  mt-2 p-3 ml-2 rounded" />
                            <img src="./images/Productthumb1.png" className="img11" style={{  height:"225px"}} />
                            <p className="text-white bg-dark rounded p11 py-2 px-2  ml-2 " style={{width:"550px"}} > mens denim shirt full</p>
                  
                        </div>
                   </div>
               </div>
           </div>
          

       </div>
    )
}

