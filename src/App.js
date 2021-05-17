import React, { Component } from "react";
import MonsterCard from "./components/MonsterCard";
import Wrapper from "./components/Wrapper";

import monsters from "./monster.json";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  // Setting this.state.monsters to the monsters json array
  state = {
    message: "Click on a monster to begin! Don't click the same monster twice!",
    highScore: 0,
    currentScore: 0,
    monsters: monsters,
    clickedMonsters: monsters,
    unclickedMonsters: monsters,
  };

  shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  checkCard = (name) => {
    const checkMonster = this.state.unclickedMonsters.find(
      (item) => item.name === name
    );

    if (checkMonster === undefined) {
      this.setState({
        highScore:
          this.state.currentScore > this.state.highScore
            ? this.state.currentScore
            : this.state.highScore,
        currentScore: 0,
        message: `Oh no, you already clicked on ${name}`,
        unclickedMonsters: monsters,
      });
    } else {
      const remainingMonsters = this.state.unclickedMonsters.filter(
        (item) => item.name !== name
      );

      this.setState({
        currentScore: this.state.currentScore + 1,
        message: `Nice, you hadn't clicked on ${name} yet!`,
        unclickedMonsters: remainingMonsters,
      });
      this.shuffleCards(monsters);
    }
  };


  render() {
    return (
      <Wrapper>
        <Navbar
          message={this.state.message}
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />

        {this.state.monsters.map((friend) => (
          <MonsterCard
            name={friend.name}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            checkCard={this.checkCard}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
