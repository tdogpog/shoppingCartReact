import React, { useContext } from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homecontainer">
      <div>
        <h1>Welcome to Murphys</h1>

        <p>A go-to website for fake goods</p>
        <Link to="shop">
          <button>Our Products</button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
