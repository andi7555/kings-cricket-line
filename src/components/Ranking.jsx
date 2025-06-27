import { useState,useEffect } from "react";
import rankingData from "../data/RankingData";
import "../styles/Ranking.css"


const Ranking = () => {
  const [activeTab, setActiveTab] = useState('odi'); // 'odi', 'test', 't20'
  const [currentRanking, setCurrentRanking] = useState([]);
  const [selectedTeamFilter, setSelectedTeamFilter] = useState('All Teams');
  const [selectedRankingType, setSelectedRankingType] = useState("Men's Ranking"); 

  useEffect(() => {
    // Set initial ranking based on the active tab
    setCurrentRanking(rankingData[activeTab]);
  }, [activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleTeamFilterChange = (e) => {
    setSelectedTeamFilter(e.target.value);
    // In a real app, you'd filter `currentRanking` based on this value
    if (e.target.value === 'All Teams') {
      setCurrentRanking(rankingData[activeTab]);
    } else {
      const filteredRanking = rankingData[activeTab].filter(item => item.team === e.target.value);
      setCurrentRanking(filteredRanking);
    }
  };

  const handleRankingTypeChange = (e) => {
    setSelectedRankingType(e.target.value);
    // In a real app, you'd potentially switch between men's/women's data
    if (e.target.value === 'Women\'s Ranking') {

      // Assusetming you have a separate
      setCurrentRanking(rankingData[activeTab].filter(item => item
.rankingType === 'Women\'s Ranking' || item.rankingType === 'Men\'s Ranking'));
    }

  };

  return (
    <div className="ranking-container">
      <h1 className="ranking-title">Ranking</h1>

      <div className="ranking-tabs">
        <button
          className={`ranking-tab ${activeTab === 'odi' ? 'active' : ''}`}
          onClick={() => handleTabChange('odi')}
        >
          ODI
        </button>
        <button
          className={`ranking-tab ${activeTab === 'test' ? 'active' : ''}`}
          onClick={() => handleTabChange('test')}
        >
          TEST
        </button>
        <button
          className={`ranking-tab ${activeTab === 't20' ? 'active' : ''}`}
          onClick={() => handleTabChange('t20')}
        >
          T20
        </button>
      </div>

      <div className="ranking-filters">
        <div className="filter-group">
          <label htmlFor="team-filter">Team</label>
          <select id="team-filter" value={selectedTeamFilter} onChange={handleTeamFilterChange}>
            <option value="All Teams">All Teams</option>
           
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="England">England</option>
            <option value="New Zealand">New Zealand</option>
          </select>
          <span className="dropdown-arrow">&#9660;</span> {/* Unicode down arrow */}
        </div>

        <div className="filter-group">
          <label htmlFor="ranking-type">Men's Ranking</label>
          <select id="ranking-type" value={selectedRankingType} onChange={handleRankingTypeChange}>
            <option value="Men's Ranking">Men's Ranking</option>
            <option value="Women's Ranking">Women's Ranking</option>
          </select>
          <span className="dropdown-arrow">&#9660;</span>
        </div>
      </div>

      <div className="ranking-table-wrapper">
        <table className="ranking-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team</th>
              <th>Rating</th>
              <th>Point</th>
            </tr>
          </thead>
          <tbody>
            {currentRanking.map((item) => (
              <tr key={item.rank}>
                <td>{item.rank}</td>
                <td className="team-cell">
                  <img src={item.flag} alt={`${item.team} flag`} className="team-flag" />
                  {item.team}
                </td>
                <td>{item.rating}</td>
                <td>{item.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ranking;