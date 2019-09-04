/* eslint-disable no-plusplus */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from 'react';

// Import the Components
import Header from './Header';
import Instructions from './Instructions';
import Cards from './Cards';
import Footer from './Footer';

// Create the array of cards
const cards = [
  {
    id: 1,
    name: 'beth',
    image: './images/beth.png',
    isClicked: false,
  },
  {
    id: 2,
    name: 'birdperson',
    image: './images/birdperson.png',
    isClicked: false,
  },
  {
    id: 3,
    name: 'evilmorty',
    image: './images/evilmorty.png',
    isClicked: false,
  },
  {
    id: 4,
    name: 'gianthead',
    image: './images/gianthead.png',
    isClicked: false,
  },
  {
    id: 5,
    name: 'goldenford',
    image: './images/goldenford.png',
    isClicked: false,
  },
  {
    id: 6,
    name: 'jerry',
    image: './images/jerry.png',
    isClicked: false,
  },
  {
    id: 7,
    name: 'jessica',
    image: './images/jessica.png',
    isClicked: false,
  },
  {
    id: 8,
    name: 'meeseeks',
    image: './images/meeseeks.png',
    isClicked: false,
  },
  {
    id: 9,
    name: 'morty',
    image: './images/morty.png',
    isClicked: false,
  },
  {
    id: 10,
    name: 'mr',
    image: './images/mr.png',
    isClicked: false,
  },
  {
    id: 11,
    name: 'rick',
    image: './images/rick.png',
    isClicked: false,
  },
  {
    id: 12,
    name: 'summer',
    image: './images/summer.png',
    isClicked: false,
  },
];

// Set the initial Sate
class App extends React.Component {
  state = {
    score: 0,
    topscore: 0,
    message: 'Click an Image to Begin',
    arrCards: cards,
  };

  // Function to update the Score/Topscore State
  // Use this syntax to get the info from the child component
  updateScore = scores => {
    console.log('Update score');

    // Take a copy of existing state
    let score = { ...this.state.score };
    let topscore = { ...this.state.topscore };

    // Add new score and topscore to a variable
    score = scores.score;
    topscore = scores.topscore;

    // Set new score state
    this.setState({
      score,
      topscore,
    });
  };

  // Function to update the isClicked on the card object
  updateClicked = clicked => {
    console.log('Update Clicked - App.js');

    // Convert id to an integer
    const intClicked = parseInt(clicked.id);
    console.log(`Clicked Image ID: ${intClicked}`);

    const isClicked = clicked.isClicked;
    console.log(`Clicked Image Clicked Status: ${isClicked}`);

    // Take a copy of state
    //! the spread operator messes things up
    // cards = { ...this.state.arrCards };
    const arrCards = this.state.arrCards;

    console.log(this.state.arrCards);

    // Loop through array of cards
    // Filter card to the clicked id
    for (let i = 0; i < arrCards.length; i++) {
      console.log(arrCards[i]);
      if (arrCards[i].id === intClicked) {
        console.log('Match in for loop');

        // Set value
        arrCards[i].isClicked = true;

        // Set state
        this.setState({ arrCards });
      }
    }
  };

  // Set all cards to isClicked = false, starting the game over
  resetClicked = reset => {
    console.log('Reset');
    // Loop through array of cards
    for (let i = 0; i < cards.length; i++) {
      cards[i].isClicked = false;
    }
  };

  // Update the message, Correct or Incorrect
  updateMessage = newMessage => {
    console.log('Update Message');
    // Take a copy of existing state
    let message = { ...this.state.message };

    // Change value
    message = newMessage;

    // Update State
    this.setState({ message });
  };

  // Shuffle the images after each choice
  shuffle = shuffleArray => {
    console.log('Shuffle Array');

    // Shuffle the Array
    function arrShuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }

    // Take a copy of state
    const arrCards = this.state.arrCards;

    // Call the above shuffle function
    arrShuffle(arrCards);

    // Set state
    this.setState({ arrCards });
  };

  // React Render function
  render() {
    // Return Components/HTML to the index.html root div, uses index.js
    return (
      <div className="App">
        {/* Send state down to child components */}
        <Header
          score={this.state.score}
          topscore={this.state.topscore}
          message={this.state.message}
        />
        <Instructions />
        <Cards
          message={this.state.message}
          arrCards={this.state.arrCards}
          updateScore={this.updateScore}
          updateClicked={this.updateClicked}
          resetClicked={this.resetClicked}
          updateMessage={this.updateMessage}
          shuffle={this.shuffle}
        />
        <Footer />
      </div>
    );
  }
}

// Export the component so it is available to others
export default App;
