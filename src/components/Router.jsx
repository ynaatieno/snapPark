import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Payments from "../Pages/Payments";
import Booking from "../Pages/Booking";
import Home from "../Pages/Home";
import Layout from "../Pages/Layout";
// import NotFound from "../pages/NotFound";
import AddSpace from "../Pages/AddSpace";

function Router(){
    return(
      <BrowserRouter>
<Routes>
<Route path="/login"element={<Layout><Login/></Layout>}/>
<Route path="/signup"element={<Layout><Signup/></Layout>}/>
{/* <Route path="*"element={<NotFound/>}/> */}

<Route path="/"element={<Layout><Home/></Layout>}/>
<Route path="/payments"element={<Layout><Payments/></Layout>}/>
<Route path="/booking"element={<Layout><Booking/></Layout>}/>
<Route path="/addspace"element={<Layout><AddSpace/></Layout>}/>



</Routes>






      </BrowserRouter>  
    )
}
export default Router