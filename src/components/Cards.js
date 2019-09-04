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
const styleImg = {
  height: '170px',
  width: '170px',
  margin: '20px',
};

const styleCont = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const styleCont2 = {
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

// Function that adds the correct class to the message for .3 seconds, then removes
// This changes the color of the message to Green
function correct() {
  const message = document.getElementById('message');
  message.classList.add('correct');
  setTimeout(function() {
    message.classList.remove('correct');
  }, 300);
}

// Function that adds the incorrect class to the message for .3 seconds, then removes
// This changes the color of the message to Red
function incorrect() {
  const message = document.getElementById('message');
  message.classList.add('incorrect');
  setTimeout(function() {
    message.classList.remove('incorrect');
  }, 300);
}

// Function that adds the zoom class to all images for 1 second, then removes
function zoom() {
  const allImgs = document.querySelectorAll('.img-thumbnail');
  for (let i = 0; i < allImgs.length; i++) {
    allImgs[i].classList.add('zoom');
  }
  setTimeout(function() {
    for (let i = 0; i < allImgs.length; i++) {
      allImgs[i].classList.remove('zoom');
    }
  }, 1000);
}

// Create object to hold the scores to return to App.js
const scores = {
  score: 0,
  topscore: 0,
};

// Cards Component
class Cards extends React.Component {
  // Use this syntax so we have access to 'this'
  handleClick = event => {
    // Get the id of the image clicked
    const isClickedID = event.currentTarget.id;

    // Get the value of isclicked from the clicked image, True or False
    const isClicked = event.currentTarget.dataset.isclicked;

    // Create the object to hold the response to send to updateClicked in App.js
    const clicked = {
      isClicked,
      id: isClickedID,
    };

    // If not previously clicked, set as clicked, increment score,
    // if score > top score, increment top score, and shuffle
    if (isClicked === 'false') {
      console.log('Image Clicked (cards.js) - Clicked status is False');

      // Set the response object
      clicked.isClicked = true;

      // Call the updateClicked function in App.js
      // Pass the id and true for isClicked
      this.props.updateClicked(clicked);

      // Increment the score
      scores.score++;

      // Check if the score is > topscore
      if (scores.score > scores.topscore) {
        // Increment topscore
        scores.topscore++;
        // console.log(scores.topscore);
      }

      // Send scores to updateScore in App.js
      this.props.updateScore(scores);

      // Change the message to Correct
      this.props.updateMessage('You Guessed Correctly!');

      // Call function that changes message color to Green
      correct();

      // Check if user got all 12 correct
      if (scores.score === 12) {
        console.log('Got all Correct');
        // Call function that changes message to 'You Win'
        this.props.updateMessage('You Guessed All Correctly, You Win!!');
        // Call zoom
        zoom();
      }
    } else {
      console.log('Image Clicked (cards.js) - Its True');
      // If already clicked, shake, and tell incorrect, reset score, leave top score alone
      // Call Shake
      shake();

      // Reset the score, send to updateScore in App.js
      scores.score = 0;
      this.props.updateScore(scores);

      // Reset all the isClicked to false, call the function in App.js
      this.props.resetClicked();

      // Change the message to Incorrect, send to updateMessage in App.js
      this.props.updateMessage('You Guessed Incorrectly!');

      // Call function in App.js that changes message color to Red
      incorrect();
    }

    // Call the function in App.js that Shuffles the array
    this.props.shuffle();
  };

  render() {
    // Get the cards array from props
    const cards = this.props.arrCards;

    // Return this to App.js
    return (
      <div style={styleCont}>
        <div style={styleCont2}>
          {/* Map over the cards arrays */}
          {cards.map((value, index) => (
            // Create the img tags
            <img
              key={index}
              id={cards[index].id}
              alt={cards[index].name}
              src={cards[index].image}
              data-isclicked={cards[index].isClicked}
              className="img-thumbnail"
              style={styleImg}
              // Handle the click event when the image is chosen, the function is inside this component
              onClick={event => this.handleClick(event)}
            />
          ))}
        </div>
      </div>
    );
  }
}

// Export the component so it is available to others
export default Cards;
