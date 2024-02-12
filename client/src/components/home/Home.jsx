import {useState} from 'react';

import Footer from "../footer/Footer";
import TopRated from "../topRated/TopRated";
import Popular from '../popular/Popular';
import './home.scss';

function Home() {

  const [results, setResults] = useState([]);

  return (
    <div className="home">
      <div className="header-text">
        <h2>We compare hotel prices from 100s of sites</h2>
        <p>We’ll do the searching. You do the saving.</p>
      </div>
      
      {/* <SearchBox xsetResults={setResults}/> */}
      <TopRated/>
      <Popular/>

      <Footer/>
    </div>
  )
}

export default Home
