import Nav from "../components/Nav"
import Footer from "../components/Footer"


function Layout({children}){
    return(
        <div>
            <Nav/>
            <main>
                {children}
            </main>
            <Footer/>
            
        </div>
    )
}
export default Layout