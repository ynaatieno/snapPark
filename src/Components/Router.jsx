import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Payments from "../pages/Payments";
import Booking from "../pages/Booking";
import Home from "../pages/Home";
import Layout from "../pages/Layout";

function Router(){
    return(
      <BrowserRouter>
<Routes>
<Route path="/login"element={<Layout><Login/></Layout>}/>
<Route path="/signup"element={<Layout><Signup/></Layout>}/>
<Route path="/"element={<Layout><Home/></Layout>}/>
<Route path="/payments"element={<Layout><Payments/></Layout>}/>
<Route path="/booking"element={<Layout><Booking/></Layout>}/>



</Routes>






      </BrowserRouter>  
    )
}
export default Router