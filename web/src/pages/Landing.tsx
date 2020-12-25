import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';


import '../style/style.css';
import '../style/pages/landing.css';


import landingImg from '../images/darkWebLanding.png'

function Landing() {
  return(
    <div id="page-landing">
      <div className="content-wrapper">
        <main>
          <h1>Oiê mundo</h1>
        </main>

        <img src={landingImg} alt="women on a video chat draw"/>
        
        
        <Link to="/app" className="enter-app">
          <FiArrowRight/>
        </Link>        
      </div>
    </div>
  );
}

export default Landing;