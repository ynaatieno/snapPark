import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
import {signInWithEmailAndPassword,validatePassword } from "firebase/auth";
import { auth, db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import {Link} from "react-router-dom"



function Logins() {
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({
password:"",
email:"",
  })
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();


  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }
  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
 async function handleLogin(){
    if (formData.email === "") {
      setErrorMessage("Kindly fill in the email");
    } else if (formData.password === "") {
      setErrorMessage("Kindly fill in password");
    }  else if(formData.password.length<6){
      setErrorMessage("password should have at least 6 characters")
          }
    else {
      setErrorMessage("");
      console.log(formData);
      signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userData) => {
        const user = userData.user;
        // console.log(user)
      })
      .catch((error) => console.log(error));

    const user = await addDoc(collection(db, "users"), formData);

    console.log(user);
    
    
    }
    if (user) {
      navigate("/booking");
    }
  }
 

  return (
    <div className="bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('src/Images/signup.avif')]  bg-no-repeat bg-cover bg-center h-[100vh] flex  justify-center items-center ">
      <div className="py-[4em] px-[4em] bg-[#fff] rounded-[20px] items-center justify-center">
        <div>
          <h1 className="font-bold text-center">Log in your account</h1>
        </div>

        <div>
          <input
            type="Email"
            name="email"
            className="border  py-[1em]  px-[2.5em]  rounded-full outline-none my-4"
            placeholder=" Enter Email Adress"
            onChange={handleInputChange}
          />

          <div className="border cursor-pointer  pr-5 rounded-full flex items-center">
            <input
              type={showPassword?"password":"text"}
              name="password"
              className=" bg-[transparent] py-[1em] px-[1em] flex-1 outline-none"
              placeholder="Enter Password"
              onChange={handleInputChange}
            />
            <div onClick={handleShowPassword}>
              {showPassword?<IoIosEye/>:<IoIosEyeOff/>}
            </div>
          </div>
        </div>
        <p className="text-red-600">{errorMessage}</p>

        <button className="text-center bg-[#023047] text-[#fff] border  border-[] py-[1em] px-[9em] rounded-full my-5" onClick={handleLogin}>
          Sign in
        </button>
       

        
        <Link to="/Signup"><h2 className="my-4 ">Don't have an account?<span className="text-[#023047] cursor-pointer">Sign up</span></h2></Link>
        
        <h2 className="text-center my-4 ">
          {" "}
          <input type="checkbox" />
          Remember me
        </h2>
      </div>
    </div>
  );
}

export default Logins;
