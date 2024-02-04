import Hotel from '../../assets/hotel-sample.webp';
import './favCard.scss';

const FavCard = () => {
  return (
    <div className="fav-card">
      <img src={Hotel} alt='Hotel-img'/>
      <div className='hotel-info'>
        <h3>Taj-Super Hotel</h3>
        <p>Hotel</p>
        <p><span>9.0</span>Excellent (2103 reviews)</p>
      </div>
      <div className='price-check'>
        <p>Check prices and availability for your selected dates</p>
        <button className='price-button'>Check prices</button>
      </div>
    </div>
  )
}

export default FavCard
