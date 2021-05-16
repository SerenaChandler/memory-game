import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

const styles = {
  headerStyle: {
    background: "purple",
  },
};

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
  };

  checkCard = (event) => {
    if (event.target.dataset.clicked === "false") {
      // get the id of the clicked on card, change the state of that object's clicked prop to true, using a set state function
      // const specificId = +event.target.dataset.id;
      // const array = this.state.friends.map((friend) => friend.id )
      // const index = array.indexOf(specificId)
      // this.state.friends[index].clicked = "true"
      event.target.dataset.clicked = "true";
      //shuffle them
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title style={styles.headerStyle}>Click to start game!</Title>
        {this.state.friends.map((friend) => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
            clicked={friend.clicked}
            checkCard={this.checkCard}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
