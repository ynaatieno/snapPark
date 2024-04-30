
import React from "react";
import { Link } from "react-router-dom";

function Nav(){
    
    
    
    
    
    return(
        <>
        <div className="bg-[#023047] fixed z-4 w-full ">
<div className="container mx-auto flex">
            <div >
<img src="src/assets/logo.png"width={100}/>
            </div>
            <div className="flex">
                <ul className="flex justify-between items-center gap-6" >
              <Link to="/">  <li className="text-white text-2xl">Home</li></Link>
              <Link to="/login">  <li className="text-white text-2xl">Login</li></Link>
              <Link to="/signUp">  <li className="text-white text-2xl">SignUp</li></Link>
              <Link to="/signOut">  <li className="text-white text-2xl">SignOut</li></Link> 
               <Link to="/addspace">  <li className="text-white text-2xl">Add Space</li></Link>
              <Link to="/bookspace">  <li className="text-white text-2xl">BookSpace</li></Link>

                </ul>
            </div>
            </div>
        </div>
        </>
    )
}




export default Nav