import React from "react";
import "./style.css";

function FriendCard(props) {

  return (
    <div  className="card">
      <div onClick = {props.checkCard} data-clicked={props.clicked} data-id={props.id} className="img-container">
        <img  src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
