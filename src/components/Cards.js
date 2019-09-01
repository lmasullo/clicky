/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
import React from 'react';

// Import css for cards.js
import '../css/cards.css';

// Inline CSS
// todo move into cards.css??
const styles = {
  height: '170px',
  width: '170px',
  margin: '20px',
};

const styleCont = {
  display: 'flex',
  flexWrap: 'wrap',
  width: '1000px',
  justifyContent: 'center',
};

// Function that adds the shake class to all images for .5 seconds, then removes
function shake() {
  const allImgs = document.querySelectorAll('.img-thumbnail');
  for (let i = 0; i < allImgs.length; i++) {
    allImgs[i].classList.add('shake');
  }

  setTimeout(function() {
    for (let i = 0; i < allImgs.length; i++) {
      allImgs[i].classList.remove('shake');
    }
  }, 500);
}

// Create object to hold the scores to return
const scores = {
  score: 0,
  topscore: 0,
};

class Cards extends React.Component {
  // Use this syntax so we have access to 'this'
  handleClick = event => {
    console.log(this);

    // Create an empty Ref
    // const myClick = React.createRef();

    // handleClick(event) {
    // const newScore = 5;
    // const topscore = 10;

    // console.log(this);

    // Check if has been clicked
    // console.log(event.currentTarget.dataset.isclicked);

    // Get the id of the image clicked
    const isClickedID = event.currentTarget.id;

    // Get the value of isclicked
    const isClicked = event.currentTarget.dataset.isclicked;
    console.log(isClickedID);
    console.log(isClicked);
    // const isClickedID = event.currentTarget.dataset.id;

    // console.log(isClicked, isClickedID);

    // Create the object to hold the response to send to updateClicked
    const clicked = {
      isClicked,
      id: isClickedID,
    };

    // const { isClicked } = this.props;
    // todo Send the array index this with clicked in an object
    // If not previously clicked, set as clicked, increment score,
    // if score > top score, increment top score, and shuffle
    if (isClicked === 'false') {
      console.log('Its False');
      //! Set State??
      // todo make isClicked = true

      // Set the response object
      clicked.isClicked = true;
      this.props.updateClicked(clicked);

      scores.score++;
      console.log(scores.score);

      if (scores.score >= scores.topscore) {
        scores.topscore++;
        console.log(scores.topscore);
      }

      this.props.updateScore(scores);
    } else {
      // todo If already clicked, shake, and tell incorrect, reset score, leave top score alone
      // Call Shake
      shake();
    }
  };

  render() {
    console.log(this.props.cards);

    // Get the cards array from props
    const { cards } = this.props;

    // Return this App.js
    return (
      <>
        <div className="container" style={styleCont}>
          {/* Map over the cards arrays */}
          {cards.map((value, index) => (
            // Create the img tags
            <img
              key={index}
              id={cards[index].id}
              alt={cards[index].name}
              src={cards[index].image}
              data-isclicked={cards[index].isClicked}
              // ref={cards[index].isClicked}
              className="img-thumbnail"
              style={styles}
              onClick={event => this.handleClick(event)}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Cards;
