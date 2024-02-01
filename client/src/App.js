import './App.css';
import Searchbox from './components/Searchbox';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <h2>We compare hotel prices from 100s of sites</h2>
      <p>We’ll do the searching. You do the saving.</p>
      
      <Searchbox />

      <div className='time-box'>

      </div>
      <Footer/>
    </>
  );
}

export default App;