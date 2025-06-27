import React, {  } from 'react';
import "../../components/Indian_T20_League/design/PointTable.css"
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { Link } from 'react-router-dom';


const TableData = () => {

  const Navigate = useNavigate(); // Initialize useNavigate hook
  const data = {
    "Team 1": {
      "Draw": 1,
      "L": 4,
      "Name": "Punjab Kings",
      "Name2":"PBKS",
      "flag": "https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fteams%252F2040.png%3F%26alt%3Dmedia&w=64&q=75",
      "NRR": 0.372,
      "P": 14,
      "PTS": 19,
      "W": 9,
      "click": () => {
        Navigate("/indian-t20-league/teams/punjab-kings");
      }
    },

    "Team 2": {
      "Draw": 1,
      "L": 4,
      "Name": "Royal Challengers Bengaluru",
      "Name2":  "RCB",
      "flag": "https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fteams%252F2138.png%3F%26alt%3Dmedia&w=64&q=75",
      "NRR": 0.301,
      "P": 14,
      "PTS": 19,
      "W": 9
    },
    "Team 3": {
      "Draw": 0,
      "L": 5,
      "Name": "Gujarat Titans",
      "flag": "https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fteams%252F2879.png%3F%26alt%3Dmedia&w=64&q=75",
      "NRR": 0.254,
      "P": 14,
      "PTS": 18,
      "W": 9,
      "click": () => {
        Navigate("/indian-t20-league/teams/gujarat-titans");
      }
    },
    "Team 4": {
      "Draw": 0,
      "L": 6,
      "Name": "Mumbai Indians",
      "flag": "https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fteams%252F1854.png%3F%26alt%3Dmedia&w=64&q=75",
      "NRR": 1.142,
      "P": 14,
      "PTS": 16,
      "W": 8,
      "click": () => {
        Navigate("/indian-t20-league/teams/mumbai-indians");
      }
    },
    "Team 5": {
      "Draw": 1,
      "L": 6,
      "Name": "Delhi Capitals",
      "flag": "https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fteams%252F1396.png%3F%26alt%3Dmedia&w=64&q=75",
      "NRR": 0.011,
      "P": 14,
      "PTS": 15,
      "W": 7,
      "click": () => {
        Navigate("/indian-t20-league/teams/delhi-capitals");
      }
    },
    "Team 6": {
      "Draw": 1,
      "L": 7,
      "Name": "Sunrisers Hyderabad",
      "flag": "https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fteams%252F1153.png%3F%26alt%3Dmedia&w=64&q=75",
      "NRR": -0.241,
      "P": 14,
      "PTS": 13,
      "W": 6,
      "click": () => {
        Navigate("/indian-t20-league/teams/sunrisers-hyderabad");
      }
    },
    "Team 7": {
      "Draw": 2,
      "L": 7,
      "Name": "Kolkata Knight Riders",
      "flag": "https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fteams%252F1873.png%3F%26alt%3Dmedia&w=64&q=75",
      "NRR": -0.305,
      "P": 14,
      "PTS": 12,
      "W": 5,
      "click": () => {
        Navigate("/indian-t20-league/teams/kolkata-knight-riders");
      }
    },
    "Team 8": {
      "Draw": 0,
      "L": 8,
      "Name": "Lucknow Super Giants",
      "flag": "https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fteams%252F2880.png%3F%26alt%3Dmedia&w=64&q=75",
      "NRR": -0.376,
      "P": 14,
      "PTS": 12,
      "W": 6,
      "click": () => {
        Navigate("/indian-t20-league/teams/lucknow-super-giants");
      }
    },
    "Team 9": {
      "Draw": 0,
      "L": 10,
      "Name": "Rajasthan Royals",
      "flag": "https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fteams%252F1558.png%3F%26alt%3Dmedia&w=64&q=75",
      "NRR": -0.549,
      "P": 14,
      "PTS": 8,
      "W": 4,
      "click": () => {
        Navigate("/indian-t20-league/teams/rajasthan-royals");
      }
    },
    "Team 10": {
      "Draw": 0,
      "L": 10,
      "Name": "Chennai Super Kings",
      "flag": "https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fteams%252F1622.png%3F%26alt%3Dmedia&w=64&q=75",
      "NRR": -0.647,
      "P": 14,
      "PTS": 8,
      "W": 4,
      "click": () => {
        Navigate("/indian-t20-league/teams/chennai-super-kings");
      }
    },
  };

  const teamDataArray = Object.values(data);

  return (
    <div className="table-container">

      <h2>IPL Point Table </h2>
     

      <table>
        <thead>
          <tr>
            {/* Added a Rank header to match the image */}
            <th>Rank</th>
            <th>Team</th>
            <th>P</th>
            <th>W</th>
            <th>L</th>
            {/* <th>Draw</th> */}
            <th>PTS</th>
            <th>NRR</th>
            
          </tr>
        </thead>
        <tbody>
          {teamDataArray.map((team, index) => (
            <tr key={index}>
              {/* Displaying rank based on index + 1 */}
              <td>{index + 1}</td>
              <td className="team-cell">
                {team.flag && <img src={team.flag} alt={`${team.Name}  flag`} className="team-flag" />}
                {team.Name}
              </td>
              <td>{team.P}</td>
              <td>{team.W}</td>
              <td>{team.L}</td>
              {/* <td>{team.Draw}</td> */}
              <td>{team.PTS}</td>
              <td>{team['NRR']}</td>
            </tr>
          ))}
        </tbody>
       
      </table>
              <div className='Links-tab'>
                      <h2>All Teams Players </h2>
                   <Link to="/indian-t20-league/team-squads">
                        <button className='act-btn' >Squads 🏏</button>
                   </Link>
              </div>
    </div>
  );
};

export default TableData;