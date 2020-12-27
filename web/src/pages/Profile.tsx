import React from 'react';
import { FiHome } from 'react-icons/fi';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';


import '../style/style.css';
import '../style/pages/profile.css';


function Profile() {
  const user = ('kaka');
  
  return(
    <div id="page-profile">
      <div className="content-wrapper">
        <main>
          <h1>Profile</h1>
        </main>


        
        <Link to="/app" className="enter-home">
          <FiEdit/>
        </Link> 
        <Link to="/" className="enter-init">
          <FiHome/>
        </Link>       
      </div>
    </div>
  );
}

export default Profile;