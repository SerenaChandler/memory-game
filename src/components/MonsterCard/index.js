import React from "react";
import "./style.css";

function FriendCard(props) {

  return (
    <div onClick = {props.checkCard} data-clicked={props.clicked} data-id={props.id} className="card">
      <div onClick = {props.checkCard} data-clicked={props.clicked} data-id={props.id} className="img-container">
        <img onClick = {props.checkCard} data-clicked={props.clicked} data-id={props.id} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
