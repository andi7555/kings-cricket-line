import React,{useState,useEffect} from 'react';
import '../styles/Calender.css'; // Optional: for Calendar-specific styling
import HorizontalDatePicker from "./HorizontalDatePicker"
import {  Commet, Riple } from 'react-loading-indicators';
import Typewriter from './Animation/Typewriter';
const Calendar = () => {



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
        <Commet color={["#5dffb0","#FFD700"]} speedPlus="1" size="large" text="" textColor="#NaNNaNNaN" />
      </div>
    );
  }



  const matches = [
    { id: 1, date: '11-07-2025', team1: 'India', team2: 'Pakistan',flag1:"https://storage.googleapis.com/download/storage/v1/b/firestore-redwhite.appspot.com/o/teams%2Find.png?&alt=media",Flag2:"https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fteams%252F7.png%3F%26alt%3Dmedia&w=256&q=75", time: '19:30 IST', venue: 'Dubai',status: 'upcoming'  },
    { id: 2, date: 'Yesterday', team1: 'England', team2: 'India',flag1:"https://storage.googleapis.com/download/storage/v1/b/firestore-redwhite.appspot.com/o/teams%2Feng.png?&alt=media",Flag2:"https://storage.googleapis.com/download/storage/v1/b/firestore-redwhite.appspot.com/o/teams%2Find.png?&alt=media", venue: "Headingley Cricket Ground",Result:"England won by 5 Wickets" },
    { id: 3, date: '08-08-2025', team1: 'South Africa', team2: 'New Zealand',flag1:"https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fteams%252F3.png%3F%26alt%3Dmedia&w=256&q=75",Flag2:"https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fteams%252F5.png%3F%26alt%3Dmedia&w=256&q=75", time: '10:00 SAST', venue: 'Centurion',status: 'Upcoming' },
    {id:4,date:"3rd",team1:'West indies',team2:'England',time:'11:00 BST',flag1:"https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fteams%252F4.png%3F%26alt%3Dmedia&w=256&q=75",Flag2:"https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fteams%252F1.png%3F%26alt%3Dmedia&w=256&q=75",venue:'Southampton',status:'England is won '},
  ];

  return (
    <div className="calendar-container">

      <h1> Cricket Calendar </h1>
      <p>View upcoming matches and events.</p>


       <HorizontalDatePicker/>

      {/* {console.log("https://api.cricapi.com/v1/cricScore?apikey=%APIKEY%")} */}
      <br /><br />

      <div className="match-schedule">
        {matches.map(match => (
          <div key={match.id} className="match-card">
             <h3>{match.date}  </h3> {/* <h3>{match.status}</h3> */}
            <p><strong> <img src={match.flag1} alt=""  style={{height:"30px"}}/> {match.team1} vs  {match.team2} <img src={match.Flag2} alt="" style={{height:"30px"}} />  </strong></p>
            <p> {match.time}</p>
            <p>Venue: {match.venue}</p>
            <p style={{color:"tomato"}}>{match.Result}</p>
          </div>
        ))}
        {matches.length === 0 && <p>No upcoming matches currently scheduled.</p>}
      </div>
    </div>
  );
};

export default Calendar;