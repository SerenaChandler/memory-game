import React from "react";
import "./style.css";

function FriendCard(props) {

  return (
    <div onClick={() => props.checkCard(props.name)} className="card">
      <div  className="img-container">
        <img alt="a monster from the video game series Monster Hunter" src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
