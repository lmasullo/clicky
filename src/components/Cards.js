/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
import React from 'react';

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

const scores = {
  score: 0,
  topscore: 0,
};

class Cards extends React.Component {
  // handleClick = event => {
  handleClick(e) {
    // const newScore = 5;
    // const topscore = 10;

    console.log(this);

    // Check if has been clicked
    // console.log(e.currentTarget.dataset.isclicked);
    const isClicked = e.currentTarget.dataset.isclicked;
    // todo Send the array index this with clixked in an object
    // If not previously clicked, set as clicked, increment score,
    // if score > top score, increment top score, and shuffle
    if (isClicked === 'false') {
      console.log('False');
      //! Set State??
      // todo make isClicked = true
      this.props.updateClicked(true);

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
  }

  render() {
    console.log(this.props.cards);
    const { cards } = this.props;

    return (
      <>
        {/* <button
          type="button"
          // onClick={() => {
          //   this.handleClick(cards);
          // }}
          // onClick={this.handleClick}
        >
          Shake
        </button> */}
        <div className="container" style={styleCont}>
          {cards.map((value, index) => (
            <img
              key={index}
              alt={cards[index].name}
              src={cards[index].image}
              data-isclicked={cards[index].isClicked}
              className="img-thumbnail"
              style={styles}
              onClick={e => this.handleClick(e)}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Cards;
