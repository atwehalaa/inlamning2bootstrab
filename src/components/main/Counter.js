import React from 'react'
import './Sale.css'
import CountUp from 'react-countup'
import { height } from 'dom7'

export default function  Counter() {
    return (
    <div className=" count">
        <div className=" d-flex justify-content-between  " style={{width:"526px"}}>
            <div className="border-dashed   rounded-circle position-relative"  style={{width:"116px",  height:"116px"}}>
                    <div className=" bg-light  position-absolute rounded-circle align-items-center justify-content-center d-flex "  style={{width:"109px",  height:"109px"}}>
                      <h3 className="color mt-4 " style={{fontSize:"36px"}} > <span className="ml-1"><CountUp end={7} duration={5} /> </span> <p className="size text-dark">Days</p></h3>
                    </div>   
                   
            </div>
            <div className="border-dashed  rounded-circle position-relative ml-4 " style={{width:"116px",  height:"116px"}}>
                    <div className=" bg-light position-absolute rounded-circle align-items-center justify-content-center d-flex "  style={{width:"109px",  height:"109px"}}>
                      <h3 className="color mt-4 " style={{fontSize:"36px"}} > <span className="ml-1"><CountUp end={23} duration={5} /> </span> <p className="size text-dark">Hours</p></h3>
                    </div>   
                   
            </div>  
            <div className="border-dashed  rounded-circle position-relative ml-4" style={{width:"116px",  height:"116px"}}>
                    <div className=" bg-light position-absolute rounded-circle align-items-center justify-content-center d-flex "  style={{width:"109px",  height:"109px"}}>
                      <h3 className="color mt-4 " style={{fontSize:"36px"}} > <span className="ml-1"><CountUp end={46} duration={5} /> </span> <p className="size text-dark">Minutes</p></h3>
                    </div>   
                   
            </div> 
            <div className="border-dashed  rounded-circle position-relative ml-4" style={{width:"116px",  height:"116px"}}>
                    <div className=" bg-light position-absolute rounded-circle align-items-center justify-content-center d-flex "  style={{width:"109px",  height:"109px"}}>
                      <h3 className="color mt-4 " style={{fontSize:"36px"}} > <span className="ml-1"><CountUp end={12} duration={5} /> </span> <p className="size text-dark">Seconds</p></h3>
                    </div>   
                   
            </div>           
        </div>
        <div className="">
            <div className="bg-light mt-4 text-center p-2  rounded-pill" style={{width:"154px"}}>
                   <button type="submit" className=" btn color" > SHOP NOW </button>
            </div>
        </div>
    </div>
    )
}

