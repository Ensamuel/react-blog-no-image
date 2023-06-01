import React from "react";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div id="navbar">
      <nav id="nav">
        <h1>Simple Blog</h1>
        <div>
          <ul className="nav__ul">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/createpost">
              <li>Create Post</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
