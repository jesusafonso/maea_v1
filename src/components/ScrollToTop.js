import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll para o topo quando a rota muda
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  useEffect(() => {
    // Se há um hash na URL, scroll para o elemento após um delay
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 500);
      }
    }
  }, [hash]);

  return null;
};

export default ScrollToTop; 