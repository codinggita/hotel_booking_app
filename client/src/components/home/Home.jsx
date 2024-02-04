import Footer from "../footer/Footer";
import Header from "../header/Header";
import './home.scss';


function Home() {
  return (
    <div className="home">
      <div className="header-text">
        <h2>We compare hotel prices from 100s of sites</h2>
        <p>We’ll do the searching. You do the saving.</p>
      </div>
      
      <Header/>
      

      <Footer/>
    </div>
  )
}

export default Home
