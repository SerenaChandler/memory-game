# memory-game

## summary
A memory game that requires you to not click on the same image more than once.

## Built with
-React

-Javascript

-CSS

-HTML

## Code Snippet

Code that rendered monster cards and set up props
```
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
```

This code checks to see if the card has already been clicked. if it has, it ends the game and resets, if it hasn't
it filters out the clicked card from unclickedMonsters, and increments your score by one, using setState
```
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
  ```