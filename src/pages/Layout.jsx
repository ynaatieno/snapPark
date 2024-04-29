
// import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Nav from "../components/Nav"


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

import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;

