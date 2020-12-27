import React, { useEffect, useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import api from '../services/api';

import '../style/pages/home.css';

interface Post {
  content: string;
}

interface PostParams {
  id: string;
}


function Home() {
  const params = useParams();
  const [post,setPost] = useState<Post[]>([]);

  useEffect(() => {
    api.get('posts').then(response => {
      setPost(response.data);
    });
  }, []);

  if (!post) {
    return <p>Wait just a moment...</p>;
  }

  const handleInput = event => {
    setPost(event.target.value);  };

  const logValue = () => {
    console.log(post);
  };

  return(
    <div id="page-home">
      <div className="content-wrapper">
        <main>
          <h1>Home</h1>
        </main>


        <div className="post-content">
          <div>
            <h5>What do you want to say to the world?</h5>
            <span data-text="true">
              <input onChange={handleInput} type="text" placeholder="add your post here"/>
            </span>
            <div dir="auto" role="button" className="post-button">
              <button onClick={logValue => alert('posted')} type="button">Post</button>
            </div>
          </div>


          {post.map( post => {
            return(
              <p>{post.content}</p>            )
          })}
          
          <Link to="/profile" className="enter-profile">
          <FiUser/>
        </Link> 
          
        </div>
       
      </div>
    </div>
  );
}

export default Home;