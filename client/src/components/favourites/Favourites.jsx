import FavCard from "./FavCard";
import './favourites.scss';

const Favourites = () => {
  return (
    <div className='favourites'>
      <div className='sidebar'>
          <p>Back</p>
      </div>
      <div className='favourite-hotels'>
          <h2>Favourites</h2>
          <FavCard/>
          <FavCard/>
          <FavCard/>
      </div>
    </div>
  )
}

export default Favourites
