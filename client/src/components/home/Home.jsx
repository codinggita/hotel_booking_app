import Footer from "../footer/Footer";
import TopRated from "../topRated/TopRated";
import Popular from '../popular/Popular';
// import Header from "../header/Header";
import './home.scss';

function Home() {
  return (
    <div className="home">



      <div className="header-text">
        <h2>We compare hotel prices from 100s of sites</h2>
        <p>We’ll do the searching. You do the saving.</p>
      </div>
      
      {/* <Header/>    */}
      <TopRated/>
      <Popular/>

      <Footer/>
    </div>
  )
}

export default Home
