import React, {useState,useEffect } from 'react'
import '../styles/Series.css'; // Import the CSS file for styling
import { Link,} from 'react-router-dom'; // Import Link for navigation
import PointTable from './Indian_T20_League/PointTable';
import Matches from './Indian_T20_League/Matches';
import T20cup from './ICC T20 World Cup 2025/T20cup';
import { OrbitProgress } from 'react-loading-indicators';
import { FaTrophy } from "react-icons/fa6";
import Typewriter from './Animation/Typewriter';
const Series = () => {

 const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Clean up on unmount
  }, []);

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        <OrbitProgress dense  color={["#5dffb0","#FFD700"]}  easing='Linear' size="large" text="" textColor="#NaNNaNNaN" />
      </div>
    );
  }

  
  return (
    <div className="series-container">
      <h1> <Typewriter  text="Cricket Series" delay={200} /></h1>
      <p>Explore ongoing, upcoming, and past cricket series from around the world.</p>
      <div className="series-list">
        
        <div className="series-item">
         
          <img src="https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fseires%252F1747666642293_ICC%2520Cricket%2520World%2520Cup%2520League%2520Two%25202023-27.png%3Fgeneration%3D1747666642664210%26alt%3Dmedia&w=256&q=75" alt="" />
          
          <h3>ICC T20 World Cup 2025</h3>
          <div className='series-btns'>
           <Link to="/ranking" >
            <button className='tab-btn' >Point table </button>
          </Link>
          <Link to="/ICC-T20-Cup/Matches" >
            <button className='tab-btn'>Matches</button>
          </Link>
          </div>
        </div>
        <div className="series-item">
          
          <img src="https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fseires%252F1748090626152_Bangladesh%2520tour%2520of%2520Pakistan%2C%25202025.png%3Fgeneration%3D1748090626562196%26alt%3Dmedia&w=256&q=75" alt="" />
          
          <h3>Pakistan vs Bagladesh T20</h3>
            <div className='series-btns'>
           {/* <Link to=""  target='_blank'>
            <button className='tab-btn' >Point table </button>
          </Link> */}
          <Link to="/pak-vs-ban" >
            <button className='tab-btn'>Matches</button>
          </Link>
          </div>
          
        </div>
        <div className="series-item">
          {/* <img src="https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fseires%252F1740747841775_Indian%2520T20%2520League.png%3Fgeneration%3D1740747842219990%26alt%3Dmedia&w=256&q=75" alt="" /> */}
          <img src="https://webimages.oneindia.com/wp-content/uploads/sites/50/2023/03/IPL.jpg" alt="" />

          <h3>Indian T20 League</h3>
          <div className='series-btns'>
           <Link to="/indian-t20-league/pointtable"  target=''>
            <button className='tab-btn' >Point table </button>
          </Link>
          <Link to="/indian-t20-league/matches" target=''>
            <button className='tab-btn'>Matches</button>
          </Link>
          {/* <Link to="/indian-t20-league/team-squads">
            <button className='tab-btn'>Team Squads</button>
          </Link> */}
            <p>RCB won by 2025 🏆 </p>
         
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Series;