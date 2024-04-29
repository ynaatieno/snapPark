import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer className="bg-[#023047] py-10 my-3">
          
            <div className=" container mx-auto flex  flex-col sm:flex-row">
            <div className="flex-1 sm:pr-[10em]">
            <img src="src/assets/logo.png"width={100}/>
                <p className="text-[#ffb703]">Offering a unique and stylish perspective on fashion is our number one priority. Confuse your mirror by our trendy outfits.</p>
            </div>
            <div className="leading-10 flex-1">
                <h2 className="font-bold text-2xl text-[#ffb703]">Quick Links</h2>
                <ul>
 <Link to="/"><li className="text-2xl text-white">Home</li></Link>
 <Link to="/login"><li className="text-2xl text-white">Login</li></Link>
 <Link to="/signup"><li className="text-2xl text-white">SignUp</li></Link>



                 
                </ul>
            </div>
         
            <div className="leading-10 flex-1">
                <h2 className="font-bold text-2xl text-[#ffb703]">Contact Us</h2>
                <ul>
                    <li className="flex gap-3 items-center mt-2 text-white text-2xl"><img src="src/assets/email.png " width={40}/><p>contact@clozzet.com</p></li>
                    <li className="flex gap-3 items-center mt-4 text-white text-2xl"><img src="src/assets/phone.png" width={40}/><p>254-700-333-333</p></li>
                    
<div className="flex gap-4">
<img src="src/assets/facebook.png"width={40} /> 
<img src="src/assets/instagram.png"width={40}/>
<img src="src/assets/twitter.png" width={40}/>
</div>
                </ul>
            </div>
            </div>
        </footer>
    )
}

export default Footer;