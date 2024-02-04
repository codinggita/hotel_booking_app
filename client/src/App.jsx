import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import NavBar from './components/navbar/Navbar';
import RecentlyViewed from './components/recentlyViewed/RecentlyViewed';
import HelpSupport from './components/helpSupport/HelpSupport';

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/recently-viewed' element={<RecentlyViewed/>}/>
        <Route path='/help-and-support' element={<HelpSupport/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App