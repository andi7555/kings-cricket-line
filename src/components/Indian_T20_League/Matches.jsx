import React from 'react';
import "../Indian_T20_League/design/Mathces.css"; // Import the CSS file for this component

const Matches = () => {
    const MatchesData = {
        
        "Match 1": {
            "Date": "30 May 2025",
            // "Location": "Maharaja Yadavindra Singh International Cricket Stadium Chandigarh",
            "flag1": "https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fteams%252F2879.png%3F%26alt%3Dmedia&w=256&q=75",
            "flag2": "https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fteams%252F1854.png%3F%26alt%3Dmedia&w=256&q=75",
            "Rival": "GT vs MI",
            "status": "Maharaja Yadavindra Singh International Stadium Chandigarh",
            "info":"GT won by 4 wickets",
            "Time": "7:30 PM"
        },
        "Match 2": {
            "Date": "Sun, Jun 01",
            // "Location": "Narendra Modi Stadium",
            "flag1": "https://storage.googleapis.com/download/storage/v1/b/firestore-redwhite.appspot.com/o/teams%2F2040.png?&alt=media",
            "flag2": "https://storage.googleapis.com/download/storage/v1/b/firestore-redwhite.appspot.com/o/teams%2F1854.png?&alt=media",
            "Rival": "PBKS vs MI",
            "status": "PBKS win by 5 wickets",
            "info":"yesterday",
            "Time": "7:30 PM"
        },
        "Match 3": {
            "Date": "Tue, Jun 03",
            "Location": "Narendra Modi Stadium Ahmedabad",
            "flag1": "https://storage.googleapis.com/download/storage/v1/b/firestore-redwhite.appspot.com/o/teams%2F2138.png?&alt=media",
            "flag2": "https://storage.googleapis.com/download/storage/v1/b/firestore-redwhite.appspot.com/o/teams%2F2040.png?&alt=media",
            "Rival": "RCB vs PBKS",
            "info":"RCB won by 6 run on Finals winers 🗼",
            "Time": "7:30 PM"
        },
        "Match 4": {
            "Date": "29 May 2025",
            // "Location": "Maharaja Yadavindra Singh International Cricket Stadium Chandigarh",
            "flag1": "https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fteams%252F2040.png%3F%26alt%3Dmedia&w=256&q=75",
            "flag2": "https://redwhitecricket.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Ffirestore-redwhite.appspot.com%2Fo%2Fteams%252F2138.png%3F%26alt%3Dmedia&w=256&q=75",
            "status": "yesterday",
            "info":"RCB won by 5 wickets",
            "Rival": "PBKS vs RCB",
            "Time": "7:30 PM"
        },
    };

    return (
        <div className="matches-section">
            <h1 className='matches-title'> Matches</h1>
            <div className='matches-container'>
                {Object.entries(MatchesData).map(([matchKey, details]) => {
                    const [team1, team2] = details.Rival.split(' vs ');

                    return (
                        <div key={matchKey} className='match-card upcoming'>
                            <div className="header">
                                <span className="time-date">{details.Time}, {details.Date}</span>
                                <span className="match-info">{details.info}</span>
                            </div>

                            <div className="teams-score">
                                <div className="team">
                                    <img
                                        src={details.flag1}
                                        alt={`${team1} Flag`}
                                        className="team-logo"
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/50x50/333/fff?text=Err'; }}
                                    />
                                    <span className="team-name">{team1}</span>
                                </div>

                                <div className="vs-indicator">vs</div>

                                <div className="team">
                                    <img
                                        src={details.flag2}
                                        alt={`${team2} Flag`}
                                        className="team-logo"
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/50x50/333/fff?text=Err'; }}
                                    />
                                    <span className="team-name">{team2}</span>
                                </div>
                            </div>

                            <div className="footer">
                                <span className="location">{details.Location}  </span><br /><br />
                                <span className="status">{details.status ? details.status : ''}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            
        </div>
    );
}

export default Matches;


