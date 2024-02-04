import Hotel from '../../assets/hotel-sample.webp';
import './recentCard.scss';


function RecentCard() {
  return (
    <div className="recent-card">
      <img src={Hotel} alt='hotel-img'/>
     
      <div className='hotel-info'>
          <h3>Hotel Valencia Center</h3>
          <p>Location</p>
          <p><span id='rating'>8.5</span>Excellent (1898 reviews)</p>
      </div>
    </div>
  )
}

export default RecentCard
