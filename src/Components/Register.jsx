import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, validatePassword } from "firebase/auth";
import { auth, db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"


function Register() {
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState({
    passwordValue: "",
  });

  const navigate = useNavigate();

  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSignUp() {
    if (formData.firstname === "") {
      setErrorMessage("Kindly fill in the first name");
    } else if (formData.lastname === "") {
      setErrorMessage("Kindly fill in the last name");
    } else if (formData.email === "") {
      setErrorMessage("Kindly fill in your  email address");
    } else if (formData.phonenumber === "") {
      setErrorMessage("Kindly fill in your  phone number");
    } else if (formData.password === "") {
      setErrorMessage("Kindly fill in the password");
    } else if (confirmPassword.passwordValue === "") {
      setErrorMessage("Kindly confirm password");
    } else if (confirmPassword.passwordValue !== formData.password) {
      setErrorMessage("Passwords do not match");
     
    }  else if(formData.password.length<6){
setErrorMessage("password should have at least 6 characters")
    }

    else {
      setErrorMessage("");
      console.log(formData);
      createUserWithEmailAndPassword(auth,formData.email,formData.password)
        .then((userData) => {
          const user = userData.user;
          // console.log(user)
        })
        .catch((error) => console.log(error));

      const user = await addDoc(collection(db,"users"), formData);

      console.log(user);
      if (user) {
        navigate("/Login");
      }
    }
  }

  return (
    <div className="bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('src/Images/signup.avif')] bg-no-repeat bg-cover bg-center h-[100vh] flex  justify-center items-center">
      <div className="py-[4em] px-[4em] bg-[#fff] rounded-[20px]">
        <div>
          <h1 className="font-bold text-center">Sign up your account</h1>
        </div>
        <div>
          <div>
            <input
              type="name"
              name="firstname"
              className="border  py-[1em]  px-[3em]  rounded-full outline-none my-4"
              placeholder="First Name"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="name"
              name="lastname"
              className="border  py-[1em]  px-[3em]  rounded-full outline-none my-4"
              placeholder="Last Name"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="phone"
              name="phonenumber"
              className="border  py-[1em] px-[3em]  rounded-full outline-none my-4"
              placeholder="phone Number"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              className="border  py-[1em]  px-[3em]  rounded-full outline-none my-4"
              placeholder="email"
              onChange={handleInputChange}
            />
          </div>

          <div className="border cursor-pointer  pr-5 rounded-full flex items-center">
            <input
              type={showPassword ? "password" : "text"}
              className=" bg-[transparent] py-[1em] px-[2em] flex-1 outline-none"
              name="password"
              placeholder=" Enter password"
              onChange={handleInputChange}
            />
            <div onClick={handleShowPassword}>
              {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
            </div>
          </div>
          <div>
            <input
              type="password"
              name="confirmpassword"
              className="border  py-[1em]  px-[3em]  rounded-full outline-none my-4"
              placeholder="Confirm Password"
              onChange={(e) =>
                setConfirmPassword({
                  ...confirmPassword,
                  passwordValue: e.target.value,
                })
              }
            />
          </div>
        </div>
        <p className="text-red-600">{errorMessage}</p>
        {/* <h2 className="text-center my-4 ">
          <input type="checkbox" />
          Security and privacy news and updates
        </h2> */}
        <button
          className="text-center bg-[#023047] text-[#fff] border  border-[] py-[1em] px-[7em] rounded-full"
          onClick={handleSignUp}
        >
          Create an account
        </button>
        
        <h2 className="my-4 ">
          already have an account?
         <Link to="/Login"><span className="text-[#023047] cursor-pointer">Log in</span></Link>
        </h2>
      </div>
    </div>
  );
}
export default Register;
