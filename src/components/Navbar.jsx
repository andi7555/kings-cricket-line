// import React from 'react';
// import { Link } from 'react-router-dom';
// import icons from '../assets/icons.png'; // Assuming you have an icon image 

// const Navbar = () => {
//   return (
//     <div>
//       <div className='navbar'>
//         <h1 className='logo'><img src={icons} alt="" style={{height:"60px", width:"60px", borderRadius:"50%"} } />Kings Cricket Live </h1> {/* Changed logo text for context */}
//         <ul className='nav-links'>
//           <Link to="/"><p>Home</p></Link>
//           <Link to="/series"><p>Series</p></Link>
//           <Link to="/calender"><p>Calender</p></Link>
//           <Link to="/news"><p>News</p></Link>
//           <Link to="/live-scores"><p>Live Scores</p></Link> {/* New link */}
//           <Link to="/ranking" ><p>Ranking</p></Link>
//           <Link to="/contectus"><p>Contact Us</p></Link>
          
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;







import React, { useState, } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import icons from '../assets/icons.png'; import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
   const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  //  useEffect(() => {
  //    const handleScroll = () => {
  //      if ( !isSticky) {
  //        setIsSticky(true);
  //      } else {
  //        setIsSticky(false);
  //      }
  //    };

  //    handleScroll()
  //  }, []);

      const toggleSticky = () =>{
        setIsSticky(!isSticky)
      }

  return (
    <div >
      <div className={`navbar ${isSticky ? 'sticky' : ''}`} onChange={toggleSticky}>
        <h1 className='logo'>
          <img src={icons} alt="" style={{ height: "60px", width: "60px", borderRadius: "50%" }} />
        
          
          Kings Cricket Live
        </h1>
        <div className="hamburger" onClick={toggleMenu}> {/* Hamburger icon */}
          {/* <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div> */}
          {isOpen ? <RxCross2   className='me-btn'  /> : <IoMenu  className='cro-btn'  />}
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : <RxCross2 />}`}> {/* Conditionally add 'open' class */}
          <Link to="/" onClick={toggleMenu}><p>Home</p></Link>
          <Link to="/series" onClick={toggleMenu}><p>Series</p></Link>
          <Link to="/calender" onClick={toggleMenu}><p>Calender</p></Link>
          <Link to="/news" onClick={toggleMenu}><p>News</p></Link>
          {/* <Link to="/live-scores" onClick={toggleMenu}><p>Live Scores</p></Link> */}
          <Link to="/ranking" onClick={toggleMenu}><p>Ranking</p></Link>
          <Link to="/contectus" onClick={toggleMenu}><p>Contact Us</p></Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import icons from '../assets/icons.png';
// import { IoMenu } from "react-icons/io5";
// import { RxCross2 } from "react-icons/rx";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className={`navbar-container ${isSticky ? 'sticky' : ''}`}>
//       <div className='navbar'>
//         <h1 className='logo'>
//           <img src={icons} alt="Logo" className="logo-img" />
//           Kings Cricket Live
//         </h1>
//         <div className="hamburger" onClick={toggleMenu}>
//           {isOpen ? <RxCross2 style={{fontSize:"30px"}} /> : <IoMenu style={{fontSize:"30px"}} />}
//         </div>
//         <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
//           <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
//           <li><Link to="/series" onClick={toggleMenu}>Series</Link></li>
//           <li><Link to="/calender" onClick={toggleMenu}>Calender</Link></li>
//           <li><Link to="/news" onClick={toggleMenu}>News</Link></li>
//           <li><Link to="/live-scores" onClick={toggleMenu}>Live Scores</Link></li>
//           <li><Link to="/ranking" onClick={toggleMenu}>Ranking</Link></li>
//           <li><Link to="/contectus" onClick={toggleMenu}>Contact Us</Link></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;