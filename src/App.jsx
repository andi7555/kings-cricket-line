import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import  Home from  './components/Home'; 
import Series from './components/Series';
import Calendar from './components/Calender'
import News from './components/News';
import LiveScores from './components/LiveScores'; // Your existing LiveScores component
import ContactUs from './components/ContactUs';

import './App.css'; // Optional: for global app styling, e.g., body background, font
import Ranking from './components/Ranking';
import Footer from './components/Footer';
import TermsOfUsePage from './components/TermsOfUsePage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import PointTable from './components/Indian_T20_League/PointTable';
import Matches from './components/Indian_T20_League/Matches';
import PakvsBan from "../src/components/PAK_vs_BAN/PakvsBan"
import IPLProfile from './components/Indian_T20_League/IPLProfile';
import NewsData from "./data/NewsData.json"
import T20cup from './components/ICC T20 World Cup 2025/T20cup';

// cursor Animation
 

function App() {



  return (
    <Router>
      <div className="App">
         
            
        <Navbar />
       
        <main>
              
          <Routes>
         
            <Route path="/" element={<Home />} />
            
            <Route path="/series" element={<Series />} />

            <Route path="/calender" element={<Calendar />} />

            <Route path="/news" element={<News articles={NewsData} />} />

            <Route path="/live-scores" element={<LiveScores />} />

            <Route path="/ranking" element={<Ranking/>} />

            <Route path="/contectus" element={<ContactUs />} />

             <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />

            <Route path="/termsofuse" element={<TermsOfUsePage />} />

             <Route path="/indian-t20-league/pointtable" element={<PointTable />} />

             <Route path="/indian-t20-league/matches" element={<Matches />} />

             <Route path="/ICC-T20-Cup/Matches"element={<T20cup/>} ></Route>

             <Route path="/pak-vs-ban" element={<PakvsBan />} />

              <Route path="/indian-t20-league/team-squads" element={<IPLProfile />} />

          </Routes>
          
        </main>
        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;