import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useState } from "react";

function Logins(){
const [showPassword, setShowPassword] = useState(true);
function handleShowPassword(){
setShowPassword(prev=>!prev)
  
}

      
    return(
      <div className="bg-[url('src/Images/login.avif')] bg-no-repeat bg-cover bg-center h-[100vh] flex  justify-center items-center">
        
          <div className="py-[4em] px-[4em] bg-[#fff] rounded-[20px]">
     <div>
        <h1 className="font-bold text-center">Log in your account</h1>
     </div>
     
     <div>
          <input type="Email" className="border  py-3  px-[4em]  rounded-full outline-none my-4"  placeholder=" Enter Email Adress"/>

          <div className="border cursor-pointer  pr-5 rounded-full flex items-center">
            <input type={showPassword?"password":"text"}  className=" bg-[transparent] py-3 px-[1em] flex-1 outline-none" placeholder= "Enter Password" />
            <div onClick={handleShowPassword} >
            {showPassword?<IoIosEye/>:<IoIosEyeOff/>}
            

            </div>
            
            </div>
            
          </div>
          
            <button className="border  border-[] py-3 px-[9em] rounded-full bg-[#023047] text-[#fff] my-5">Sign in</button>
            <h2 className="text-center">OR</h2>
            <button className="text-center bg-[#023047] text-[#fff] border  border-[] py-3 px-[8em] rounded-full">Sign in with Google</button>
            <h2 className="text-center my-4 cursor-pointer">Forgot password?</h2>
            <h2 className="text-center my-4 " > <input type="checkbox"/>Remember me</h2>
           
            
            </div>
      
        </div>
        

    )
}

export default Logins


