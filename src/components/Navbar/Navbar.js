import React from "react";
import "./Navbar.css";

const Navbar = (props) => (
  <nav className="navbar">
    <div>{props.message}</div>
    <div >
      Score: <span className="score">{props.currentScore} </span>| High Score:
      <span className="highScore">{props.highScore}</span>
    </div>
  </nav>
);

export default Navbar;
