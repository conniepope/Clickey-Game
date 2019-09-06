import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import characters from "./characters.json";

class App extends Component {
  // Setting state to initial values
  state = {
    characters: characters,
    guessedCards: [],
    score: 0
  };

// function to get name value of card clicked 
handleClickEvent = event => {
  const name = event.target.attributes.getNamedItem("name").value;
  // check to see if card has already been clicked
  this.checkGuess(name)
}

// function to check if card has already been guessed
checkGuess = name => {

  // if guessed already, game over
  if (this.state.guessedCards.includes(name)) {
    alert (`Oops! You already picked ${name}. GAME OVER! But don't worry, you can try again!`);

    // update topScore if necessary
    if (this.score > this.topScore) {
      this.topScore = this.score;
    } else {
      this.topScore = this.topScore;
    }

    // reset
    this.guessedCards.empty();
    this.score = 0;
    this.shuffle()

  } else {
    // if not guessed yet, push to guessedCards array
    name.push(this.guessedCards);
    // add to score
    this.score++;
    // continue game
    this.shuffle()
  }
}

// function to set state of cards to the new shuffled state
shuffle = () => {
  this.setState(characters = this.shuffleArray(this.state.characters))
}

// math to shuffle cards
shuffleArray = (characters) => {
  var j, x, i;
  for (i = characters.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = characters[i];
    characters[i] = characters[j];
    characters[j] = x;
  }
  return characters;
}

// Map over this.state.character and render a Card component for each character object
  render() {
    return (
      <Wrapper>
        <Header>Disney Characters Clicky Game</Header>
        {this.state.characters.map(character => (
          <Card
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
