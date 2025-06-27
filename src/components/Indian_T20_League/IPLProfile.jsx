// // src/IPLProfile.js
// import React from 'react';
// import IPLData from "../../data/IPLData"
// import "../Indian_T20_League/IPLProfile.css"

// const IPLProfile = () => {
//   return (
//     <div className="ipl-squads-container">
//       <h1>Squads Profile</h1>
//       {Object.keys(IPLData).map((teamName) => (
//         <div key={teamName} className="team-section">
//           <h2>{teamName} Squad</h2>
//           <div className="players-grid">
//             {IPLData[teamName].map((player) => (
//               <div key={player.Player} className="player-card">
//                 <img src={player.img} alt={player.Name} className="player-image" />
//                 <h3 className="player-name">{player.Name}</h3>
//                 <p className="player-position">{player.position}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default IPLProfile;



import React,{useState,useEffect} from 'react';
import IPLData from "../../data/IPLData"; 
import "../Indian_T20_League/IPLProfile.css"; 
import { Commet, OrbitProgress } from 'react-loading-indicators';
import Typewriter from '../Animation/Typewriter';

const IPLProfile = () => {




 const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 1 seconds delay

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
        <Commet color={["#FFD700","#5dffb0"]} speedPlus="1" size="large" text="" textColor="#NaNNaNNaN" />
      </div>
    );
  }


  return (
    <>
      
    <div className="ipl-squads-container">
      
      <h1>  <Typewriter text="Squads Profile"   delay={200}  /> </h1>
      {Object.keys(IPLData).map((teamName) => (
        <div key={teamName} className="team-section">
          <h2>{teamName} Squad</h2>
          <div className="players-grid">
            {IPLData[teamName].map((player) => (
              <div key={player.Player} className="player-card">
                <div className="player-card-inner">
                
                  {/* Front of the card */}
                  <div className="player-card-front">
                    <img src={player.img} alt={player.Name} className="player-image" />
                    <h3 className="player-name">{player.Name}</h3>
                    <p className="player-position">{player.position}</p>
                  </div>

                  {/* Back of the card */}
                  <div className="player-card-back">
                    <h3 className="player-name">{player.Name}</h3>
                    <p className="player-data-item">
                      <strong> 🏏  Style:</strong> {player.battingStyle}
                    </p>
                    <p className="player-data-item">
                      <strong>⚾ Style:</strong> {player.bowlingStyle}
                    </p>
                    <p className="player-data-item">
                      <strong>Birth Place:</strong> {player.nationality}
                    </p>
                    <p className="player-data-item">
                      <strong>Matches:</strong> {player.matches}
                    </p>
                    <p className="player-data-item">
                      <strong>Runs:</strong> {player.runs}
                    </p>
                    <p className="player-data-item">
                      <strong>Wickets:</strong> {player.wickets}
                    </p>
                    <div className="Player-data-item" >
                     <a href={player.Link} target='_blank'> <button> Read More</button></a>
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default IPLProfile;