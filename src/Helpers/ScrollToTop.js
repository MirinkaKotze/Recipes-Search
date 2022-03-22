// Allow Pages to start from the top RATHER than the current scroll position
// CALLED FROM: App
// RETURN: Scroll position at the top of the page

// SOLVING THIS PROBLEM:
// When a new compenent is called the URL changes instead of refreshing the page
//      Thus React remembers the current scroll position and doesn't automatically scroll back to the top of the page

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

export default ScrollToTop;