/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from 'react';
// import logo from './logo.svg';
// import '../css/App.css';

import Header from './Header';
import Instructions from './Instuctions';
import Cards from './Cards';
import Footer from './Footer';

const cards = [
  {
    name: 'beth',
    image: '../images/beth.png',
    isClicked: false,
  },
  {
    name: 'birdperson',
    image: '../images/birdperson.png',
    isClicked: false,
  },
  {
    name: 'evilmorty',
    image: '../images/evilmorty.png',
    isClicked: false,
  },
  {
    name: 'gianthead',
    image: '../images/gianthead.png',
    isClicked: false,
  },
  {
    name: 'goldenford',
    image: '../images/goldenford.png',
    isClicked: false,
  },
  {
    name: 'jerry',
    image: '../images/jerry.png',
    isClicked: false,
  },
  {
    name: 'jessica',
    image: '../images/jessica.png',
    isClicked: false,
  },
  {
    name: 'meeseeks',
    image: '../images/meeseeks.png',
    isClicked: false,
  },
  {
    name: 'morty',
    image: '../images/morty.png',
    isClicked: false,
  },
  {
    name: 'mr',
    image: '../images/mr.png',
    isClicked: false,
  },
  {
    name: 'rick',
    image: '../images/rick.png',
    isClicked: false,
  },
  {
    name: 'summer',
    image: '../images/summer.png',
    isClicked: false,
  },
];

class App extends React.Component {
  state = {
    score: 0,
    topscore: 0,
    cards,
  };

  updateScore = scores => {
    console.log('Update score');
    // Take a copy of existing state
    let score = { ...this.state.score };
    let topscore = { ...this.state.topscore };
    // Add new score and topscore to variable
    score = scores.score;
    topscore = scores.topscore;
    // Set new score
    this.setState({
      score,
      topscore,
    });
  };

  updateClicked = clicked => {
    const cards = { ...this.state.cards };
    cards[0].isClicked = clicked;
    this.setState({
      cards,
    });
  };

  render() {
    return (
      <div className="App">
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
