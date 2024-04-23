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
