import React from 'react';

import Header from './components/sidebars/Header';
import MainContainer from './components/main/MainContainer';
import RightSideBar from './components/sidebars/rightsidebar/RightSideBar';

function App() {
  return (
    <div className="max-w-screen-2xl m-auto flex">
      <Header />
      <MainContainer />
      <RightSideBar />
    </div>
  );
}

export default App;
