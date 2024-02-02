import React from 'react';
import { Link } from "react-router-dom";
import Card from './card/Card';

function Favorites() {
  return (
    <div className='favorites'>
      <span className='side'>
          <Link to={"/"}>Back</Link>
      </span>
      <div className='main'>
          <h1>Your favourites</h1>
          <p>1 list</p>
          <div className='fav-card'>
            <Card/>
            <Card/>
          </div>
      </div>
    </div>
  )
}

export default Favorites
