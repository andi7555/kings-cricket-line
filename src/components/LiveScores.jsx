 import React from 'react';
 import dummydata from '../components/dummyCrikcetData.json';
 import '../styles/LiveScores.css'; // Import the CSS file for stylin




const LiveScores = () => {
  return (
    <>
      
     
    <div className='live-scores-container'> 
         
               {/* <h1>Live Scores</h1> */}
        


              
      {
        dummydata.map((item, index) => {
          return (
            
            <div key={item.id || index} className='live-score-card'>
              <h2> {item.id}</h2>
              <p ><img src={item.flag1} alt=""  style={{height:"25px" ,borderRadius:"50px"}} /> {item.team1}  vs {item.team2} <img src={item.flag2} alt="" style={{height:"25px"}} /> </p>
              <p className="score"> {item.score1} - {item.score2}</p> 
              <p className="status" > {item.status}</p> 
              <p className="result"> {item.result}</p> 
              <p className="venue">Stadium:- {item.venue}</p> 
            </div>
          )
        })
      }
      </div>
   
    </>
  )
}

export default LiveScores;



