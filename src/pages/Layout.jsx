import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Payment from "../components/Payment"
import Logins from "../components/Logins"
import Register from "../components/Register"
import Bookings from "../components/Bookings"
import Hero from "../components/Hero"

function Layout(){
    return(
        <div>
            <Nav/>
            <Payment/>
            <Footer/>
            <Logins/>
            <Register/>
            <Hero/>
            <Bookings/>
        </div>
    )
}
export default Layout