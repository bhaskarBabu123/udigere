import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Extracts pathname property from the useLocation hook
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever the pathname changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Optional: use 'auto' for an instant jump
    });
  }, [pathname]); // Reruns the effect when pathname changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;
