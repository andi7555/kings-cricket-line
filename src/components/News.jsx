
// import React, {useState,useEffect} from 'react'
// import  "../styles/News.css"
// import { OrbitProgress,Commet } from 'react-loading-indicators';
// import Typewriter from './Animation/Typewriter';

// const News = ({articles}) => {


//  const [isLoading, setIsLoading] = useState(true);
//  const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(6); 


//   useEffect(() => {
//     // Simulate loading delay
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000); // 1 seconds delay

//     return () => clearTimeout(timer); // Clean up on unmount
//   }, []);

//   // Calculate pagination
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentArticles = articles?.slice(indexOfFirstItem, indexOfLastItem) || [];
//   const totalPages = Math.ceil((articles?.length || 0) / itemsPerPage);


//   if (isLoading) {
//     return (
//       <div style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh'
//       }}>
//         <Commet color={["#FFD700","#5dffb0"]}  size="large" text="" textColor="#NaNNaNNaN" />
//       </div>
//     );
//   }


//    if (!articles || articles.length === 0) {
//     return <p className="text-gray-400 text-center text-lg p-8">No news available at the moment.</p>;
//   }
//   return (
//     <div className="news-container">
//       <h1> <Typewriter  text="Latest Cricket News" delay={300}/> </h1>
//       <div className="news-card">
//       {currentArticles.map((article) => (
//         <a href={article.link} target="_blank" rel="noopener noreferrer" className="news-card-link" key={article.article_id}>
//           <div className="news-card">
//             {article.image_url && (
//               <div className="news-image-wrapper">
//                 <img src={article.image_url} alt={article.title || 'News image'} className="news-image" />
//               </div>
//             )}
//             <div className="news-content">
//               <h2 className="news-title">{article.title}</h2>
//               {/* Keeping description, but you can remove or hide it based on desired layout as the image doesn't show it */}
//               {article.description && <p className="news-description">{article.description}</p>}
//               <div className="news-meta">
//                 {article.pubDate && (
//                   <span className="news-date">
//                     {new Date(article.pubDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
//                   </span>
//                 )}
//                  {article.source_name && <span className="news-source">{article.source_name}</span>}
//               </div>
//             </div>
//           </div>
//         </a>
//       ))}
//       </div>
//        {totalPages > 1 && (
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={setCurrentPage}
//         />
//       )}
//     </div>
//   );
  
// }

// export default News

import React, { useState, useEffect } from 'react';
import "../styles/News.css";
import { OrbitProgress, Commet } from 'react-loading-indicators';
import Typewriter from './Animation/Typewriter';
import Pagination from './Pagination/Pagination';

const News = ({ articles }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = articles?.slice(indexOfFirstItem, indexOfLastItem) || [];
  const totalPages = Math.ceil((articles?.length || 0) / itemsPerPage);

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        <Commet color={["#FFD700", "#5dffb0"]} size="large" text="" textColor="#NaNNaNNaN" />
      </div>
    );
  }

  if (!articles || articles.length === 0) {
    return <p className="text-gray-400 text-center text-lg p-8">No news available at the moment.</p>;
  }

  return (
    <div className="news-container">
      <h1><Typewriter text="Latest Cricket News" delay={300} /></h1>
      <div className="news-grid">
        {currentArticles.map((article) => (
          <a href={article.link} target="_blank" rel="noopener noreferrer" className="news-card-link" key={article.article_id}>
            <div className="news-card">
              {article.image_url && (
                <div className="news-image-wrapper">
                  <img src={article.image_url} alt={article.title || 'News image'} className="news-image" />
                </div>
              )}
              <div className="news-content">
                <h2 className="news-title">{article.title}</h2>
                {article.description && <p className="news-description">{article.description}</p>}
                <div className="news-meta">
                  {article.pubDate && (
                    <span className="news-date">
                      {new Date(article.pubDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                  )}
                  {article.source_name && <span className="news-source">{article.source_name}</span>}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default News;