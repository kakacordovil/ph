import React from 'react';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../style/pages/home.css';


function Home() {
  return(
    <div id="page-home">
      <div className="content-wrapper">
        <main>
          <h1>Home</h1>
        </main>

        <Link to="/profile" className="enter-profile">
          <FiUser/>
        </Link>
       
      </div>
    </div>
  );
}

export default Home;