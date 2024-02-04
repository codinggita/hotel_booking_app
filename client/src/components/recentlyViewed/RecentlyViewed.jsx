import './recentlyViewed.scss';
import RecentCard from './RecentCard';

function RecentlyViewed() {
  return (
    <div className='recent'>
      <div className='sidebar'>
          <p>Back</p>
      </div>
      <div className='recent-cards'>
          <h2>Recently viewed</h2>
          <RecentCard/>
          <RecentCard/>
      </div>
    </div>
  )
}

export default RecentlyViewed
