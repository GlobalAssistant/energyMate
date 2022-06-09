import React from 'react';
import { useState, useEffect } from 'react';
import up_arrow from '../images/up-arrow.png';
import '../styles/style.css';

function TopButton() {
  
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.pageYOffset > 50) {
              setShowButton(true);
          } else {
              setShowButton(false);
          }
      });
  }, []);

  const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  };

  return (
    <div>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <img src={up_arrow} alt=""/>
        </button>
      )}
    </div>
  );
}

export default TopButton;