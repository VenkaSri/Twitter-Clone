import React from "react";
import ReactDOM from 'react-dom';

const Footer =  () => {
 return  <div>hello </div>;
};

const LandingFooter = () => {
  return <React.Fragment>
    {ReactDOM.createPortal(<Footer />, document.getElementById('landing-footer'))};
  </React.Fragment>
}

export default LandingFooter;