import React from 'react';
import {Link} from 'react-router-dom';

const Nav= () => {
  return (
    <div>
      <div className="App">
        <h1>Refugee Stories</h1>
        <div>
          <Link to = "/">Home</Link>
        </div>
        <div>
          <Link to = "/login">Admin Login</Link>
        </div>
        <div>
          <Link to = "/signup">Admin Sign Up</Link>
        </div>
        <div>
          <Link to = "/storiesreview">Stories to Review</Link>
        </div>

        <div>
          <Link to = "/submitstory">Submit Your Story</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
