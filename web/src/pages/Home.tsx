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

        <div className="post-content">
          <div>
            <h5>What do you want to say to the world?</h5>
            <span data-text="true">
              <input type="text" placeholder="add your post here"/>
            </span>
            <div dir="auto" role="button" className="post-button">
              <span>
                <span>Post</span>
              </span>
            </div>
          </div>
          
          
          
        </div>
       
      </div>
    </div>
  );
}

export default Home;