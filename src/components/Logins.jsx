import Login from "../pages/Login"


function Logins(){
    return(
        <div>
             <div className="container mx-auto flex justify-evenly my-11">
     

      <div className="my-10">
        <h1 className="font-bold ">Login to your account</h1>
        <div className="flex-row">
          <input
            type="Email"
            className="border  py-3  px-[4em]  rounded-full outline-none my-4"
            placeholder="Email Adress"
          />

          <div className="border cursor-pointer  pr-5 rounded-full flex items-center">
            <input
              type={showPassword?"password":"text"}
              className=" bg-[transparent] py-3 px-[1em] flex-1 outline-none"
              placeholder="Password"
            />
            <div onClick={handleShowPassword} >
            {showPassword?<FaEye />:<FaEyeSlash/>}
            

            </div>
          </div>
        </div>

        <div className="flex my-7 justify-between">
          <h2>Remember me</h2>
          <h2 className="text-[#45c9a1]"> Forgot Password</h2>
        </div>
        <button className="border  border-[] py-3 px-[8em] rounded-full bg-[#45c9a1] text-[#fff]">
          Sign in
        </button>

        <h2 className="text-center">OR</h2>
        <button className="border   py-3 px-[8em] rounded-full text-blue-600">
          Log in with Google
        </button>
        <h2>
          Don't Have An Account Yet?
          <span className="text-[#45c9a1]">Sign Up Free</span>
        </h2>
      </div>
    </div>

        </div>
    )
}
export default Logins