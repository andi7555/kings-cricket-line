// import React, { } from 'react';
// import "../styles/Home.css"; // Optional: for Home-specific styling
// import { Link } from 'react-router-dom';
// import { OrbitProgress } from 'react-loading-indicators';
// const Home = () => {




//   return (
//     <div className="home-container">
//       <h1>Welcome to CricLive!</h1>
     
//       <p>Your one-stop destination for live cricket scores, news, and updates.</p>
//       {/* Add more content here, e.g., featured matches, latest news snippets */}
//       <section className="home-features">
//         <h2>Key Features:</h2>
//         <ul>
//          <Link to="/live-scores"> <li>Real-time Live Scores</li></Link>
//          <Link to="/calender"> <li>Detailed Match Schedules</li></Link>
//          <Link to="/news" ><li>Latest Cricket News</li></Link>
//          <Link to="/series"> <li>Series Information & Stats</li> </Link>
//          <Link to="/indian-t20-league/matches"><li>Indian T20 League</li></Link>
         
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Home;


import React, { useState, useEffect } from 'react';
import "../styles/Home.css"; // Optional: for Home-specific styling
import { Link } from 'react-router-dom';
import { OrbitProgress,Commet } from 'react-loading-indicators';
import LiveScores from "../components/LiveScores"
import Typewriter from './Animation/Typewriter';


const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 2 seconds delay

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
        <Commet dense variant='disc' color={["yellow"]} size="large" text="" textColor="#NaNNaNNaN" />
      </div>
    );
  }

  

  return (
   <>
    <div className="home-container">
       
      
      <h1><Typewriter text="Welcome to CricLive!" delay={200}  repeat={Infinity} /></h1>
      <p> <Typewriter text="Your one-stop destination for live cricket scores, news, and updates." delay={350}/></p>
      
      {/* <p>Your one-stop destination for live cricket scores, news, and updates.</p> */}
      {/* Add more content here, e.g., featured matches, latest news snippets */}
      <section className="home-features">
        <h2>Key Features:</h2>
        <ul>
          <Link to="/live-scores"> <li>Real-time Live Scores</li></Link>
          <Link to="/calender"> <li>Detailed Match Schedules</li></Link>
          <Link to="/news" ><li>Latest Cricket News</li></Link>
          <Link to="/series"> <li>Series Information & Stats</li> </Link>
          <Link to="/indian-t20-league/matches"><li>Indian T20 League</li></Link>
        </ul>
      </section>    

    </div>
     <div className="" style={{margin:"0"}} >
      
        <h1 style={{background:"black",borderRadius:"20px",fontSize:"40px",color:"white",fontFamily:"'Acherus Militant 1', sans-serif",marginLeft:"30px",marginRight:"30px"}}>Live Scores</h1>
        <LiveScores />

    </div> 
    </>
    
  );
};

export default Home;