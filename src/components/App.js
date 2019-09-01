/* eslint-disable no-plusplus */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from 'react';
// import logo from './logo.svg';
// import '../css/App.css';

// Import the Components
import Header from './Header';
import Instructions from './Instuctions';
import Cards from './Cards';
import Footer from './Footer';

// Create the array cards
const cards = [
  {
    id: 1,
    name: 'beth',
    image: '../images/beth.png',
    isClicked: false,
  },
  {
    id: 2,
    name: 'birdperson',
    image: '../images/birdperson.png',
    isClicked: false,
  },
  {
    id: 3,
    name: 'evilmorty',
    image: '../images/evilmorty.png',
    isClicked: false,
  },
  {
    id: 4,
    name: 'gianthead',
    image: '../images/gianthead.png',
    isClicked: false,
  },
  {
    id: 5,
    name: 'goldenford',
    image: '../images/goldenford.png',
    isClicked: false,
  },
  {
    id: 6,
    name: 'jerry',
    image: '../images/jerry.png',
    isClicked: false,
  },
  {
    id: 7,
    name: 'jessica',
    image: '../images/jessica.png',
    isClicked: false,
  },
  {
    id: 8,
    name: 'meeseeks',
    image: '../images/meeseeks.png',
    isClicked: false,
  },
  {
    id: 9,
    name: 'morty',
    image: '../images/morty.png',
    isClicked: false,
  },
  {
    id: 10,
    name: 'mr',
    image: '../images/mr.png',
    isClicked: false,
  },
  {
    id: 11,
    name: 'rick',
    image: '../images/rick.png',
    isClicked: false,
  },
  {
    id: 12,
    name: 'summer',
    image: '../images/summer.png',
    isClicked: false,
  },
];

// Set the initial Sate
class App extends React.Component {
  state = {
    score: 0,
    topscore: 0,
    cards,
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

    // Set new score
    this.setState({
      score,
      topscore,
    });
  };

  // Function to update the isClicked on the card object
  updateClicked = clicked => {
    console.log('Update Clicked');
    // Take a copy
    // const cards = { ...this.state.cards };

    console.log(typeof cards);

    // const filteredCard = cards.filter(i => i.includes(clicked.id));

    // const filteredCard = cards.filter(clicked.id);
    console.log(`Clicked ID: ${clicked.id}`);

    // console.log(typeof clicked.id);

    const intClicked = parseInt(clicked.id);

    // Add new value

    // Loop through array
    // Filter card to the clicked id

    for (let i = 0; i < cards.length; i++) {
      console.log(cards[i]);
      if (cards[i].id === intClicked) {
        console.log('Match in for loop');

        // Take a copy
        const cards = { ...this.state.cards };

        // Set value
        cards[i].isClicked = true;

        // Set state
        this.setState({ cards });
      }
    }

    // Object.keys(cards).forEach(key => {
    //   if (cards[key].id === intClicked) {
    //     console.log('Match');

    //     console.log(cards[key].index);

    //     console.log(
    //       `ID: ${cards[key].id}, Index: , Name: ${cards[key].name}, isClicked: ${cards[key].isClicked}`
    //     );

    //     cards[0].isClicked = true;
    //   }
    // });

    // Set state
    // this.setState({ cards });

    // cards[0].isClicked = clicked;
    // this.setState({
    // cards,
    // });
  };

  // React Render function
  render() {
    // Return Components/HTML to the index.html root div, uses index.js
    return (
      <div className="App">
        {/* Send state down to child components */}
        <Header score={this.state.score} topscore={this.state.topscore} />
        <Instructions />
        <Cards
          cards={cards}
          updateScore={this.updateScore}
          updateClicked={this.updateClicked}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
