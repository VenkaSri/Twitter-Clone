import React from 'react'

import TrendsFeed from '../../components/explore/for-you/TrendsFeed';
import ReactGA from 'react-ga';

const ForYou = () => {
  ReactGA.pageview(window.location.pathname);
  return (
    <>
    <TrendsFeed />
    </>
    
  )
}

export default ForYou;
