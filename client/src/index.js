import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Searchbox from './components/Searchbox';
import SearchResult from './components/SearchResult';
import Favorites from './components/Favorites';
import RecentlyViewed from './components/RecentlyViewed';
import HelpSupport from './components/HelpSupport';
import Bookings from './components/Bookings';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<App />}/> 
        <Route path="/search" element={<Searchbox/>} />
        <Route path="/searchResult" element={<SearchResult />}/>
        <Route path='/favourites' element={<Favorites/>} />
        <Route path='/recently-viewed' element={<RecentlyViewed />}/>
        <Route path='/help-and-support' element={<HelpSupport />} />
        <Route path='/my-bookings' element={<Bookings />} />
        <Route path='/*' element={<h1>Not a route</h1>} />
      </Routes>
    <Footer />
  </BrowserRouter>
);

reportWebVitals();
