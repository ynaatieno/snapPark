import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "../pages/Login"
import Signup from "../pages/Signup"

function Router (){
    return(
      <BrowserRouter>
<Route>
<Route path="/login"element={<Layout><Login/></Layout>}/>
<Route path="/signup"element={<Layout><Signup/></Layout>}/>


</Route>






      </BrowserRouter>  
    )
}
export default Router