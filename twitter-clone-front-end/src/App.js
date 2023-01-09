import React from 'react';

import Header from './components/sidebars/Header';
import RightSideBar from './components/sidebars/RightSideBar';
import MainContainer from './components/main/MainContainer';

function App() {
  return (
    <div className="max-w-screen-2xl m-auto flex">
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
