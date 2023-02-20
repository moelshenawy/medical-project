
import Navbar from './../Navbar/index';
import Footer from './../Footer/index';

export default function Layout({ children }) {
  return (
    <>
      <div className="Layout">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}