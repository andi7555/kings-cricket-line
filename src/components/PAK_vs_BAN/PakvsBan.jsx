import React from 'react';
import "../../components/PAK_vs_BAN/PakvsBan.css"; 

const PakvsBan = () => {
 const PakvsBanData = {
   "Match 1": {
     "Date": "01 Jun 2025",
     "Location": "Gaddafi Stadium Lahore",
     "flag1": "https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fteams%252F7.png%3F%26alt%3Dmedia&w=256&q=75",
     "flag2": "https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fteams%252F10.png%3F%26alt%3Dmedia&w=256&q=75",
     "Rival": "Pakistan vs Bangladesh",
     "scores1": "201-3",
     "scores2": "144-9",
     "status": "Pakistan won by 57 runs",
     "info": "3rd T20I Match",
     "Time": "08:30 pm"
   },
    "Match 2": {
      "Date": "30 may 2025",
      "Location": "Gaddafi Stadium Lahore",
      "flag1": "https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fteams%252F7.png%3F%26alt%3Dmedia&w=256&q=75",
      "flag2": "https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fteams%252F10.png%3F%26alt%3Dmedia&w=256&q=75",
      "Rival": "Pakistan vs Bangladesh",
      "scores1": "197-3",
      "scores2": "170-6",
      "status": "Pakistan won by 3 wickets",
      "info": "2nd T20I Match",
      "Time": "08:30 pm"
    }

 };

            

 return (
    <div className="app-container"> 
       <div className="matches-header">
        <h1 className="matches-title">Pakistan vs Bangladesh T20 Series</h1>
    </div>
        <br /><br />
      {Object.entries(PakvsBanData).map(([matchKey, match]) => {
        const [team1, team2] = match.Rival.split(" vs ");
        const [score1, wickets1] = match.scores1.split('/');
        const [score2, wickets2] = match.scores2.split('/');

        // Determine if the status is "Live" or a result
        const isLive = match.status.toLowerCase() === "live";

        return (
            
          <div className="match-container" key={matchKey}>
            <div className="match-info">
              <span className="time">{match.Time}, {match.Date}</span>
              <span className="series">{match.info}, {match.Rival} Twenty20 Series...</span>
            </div>
            <div className="score-card">
              <div className="team">
                <img src={match.flag1} alt={team1} className="flag" />
                <span className="team-name">{team1.toUpperCase()}</span>
                <div className="score">
                  <span className="runs">{score1}{wickets1 ? '/' : ''}</span>
                  {wickets1 && <span className="wickets">{wickets1}</span>}
                </div>
                {/* Placeholder for overs, assuming not available for every match,
                    or would be dynamically added if it's a live match. */}
                {isLive && <span className="overs">(Overs: 17.2)</span>}
              </div>
              {isLive ? (
                <div className="live-badge">Live</div>
              ) : (
                <div className="result-status">{match.status}</div>
              )}
              <div className="team">
                <img src={match.flag2} alt={team2} className="flag" />
                <span className="team-name">{team2.toUpperCase()}</span>
                <div className="score">
                  <span className="runs">{score2}{wickets2 ? '/' : ''}</span>
                  {wickets2 && <span className="wickets">{wickets2}</span>}
                </div>
                {isLive && <span className="overs">(Overs: 20.0)</span>}
              </div>
            </div>
            <div className="match-details">
              <span className="t20-tag">T20</span>
              <span className="location">{match.Location}</span>
            </div>
          </div>
          
        );
      })}
    </div>
 );
}

export default PakvsBan;