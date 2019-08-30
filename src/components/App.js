import React from 'react';
// import logo from './logo.svg';
import '../App.css';

import Header from "./Header";
import Instructions from "./Instuctions";
import Cards from "./Cards";

let cards = [
  {
      image: '../images/beth.png',
      isClicked: false
  },
  {
      image: '../images/birdperson.png',
      isClicked: false,
  },
  {
    image: '../images/evilmorty.png',
    isClicked: false
},
{
  image: '../images/gianthead.png',
  isClicked: false
},
{
  image: '../images/goldenford.png',
  isClicked: false
},
{
  image: '../images/jerry.png',
  isClicked: false
},
{
  image: '../images/jessica.png',
  isClicked: false
},
{
  image: '../images/meeseeks.png',
  isClicked: false
},
{
  image: '../images/morty.png',
  isClicked: false
},
{
  image: '../images/mr.png',
  isClicked: false
},
{
  image: '../images/rick.png',
  isClicked: false
},
{
  image: '../images/summer.png',
  isClicked: false
},
]
// imgSrc = {cards[0].image}
class App extends React.Component {
  render(){
    return(
      <div className="App">
        <Header />
        <Instructions/>
        <Cards cards={cards}/>
      </div>
    );
  }
}

export default App;
