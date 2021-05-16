import React from "react";

const Navbar = (props) => (
  <nav className="navbar">
    <div className="col-sm">
      <a href="https://github.com/SerenaChandler/memory-game">Memory Game</a>
    </div>
    <div className={props.currentScore === 0 ? "blue" : "pink"}>
      {props.message}
    </div>
    <div className="col-sm">
      Score: <span className="score">{props.currentScore} </span>| High Score:{" "}
      <span className="highScore">{props.highScore}</span>
    </div>
  </nav>
);

export default Navbar;
