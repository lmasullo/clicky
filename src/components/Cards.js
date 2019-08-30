import React from 'react';

import '../css/shake.css';



// Inline CSS
let styles = {
   
    height: '170px',
    width: '170px',
    margin: '20px'

};

let styleCont = {
   
  width: '1000px',

};



class Cards extends React.Component {

  handleClick(){
    alert("Hey");
  }

    render() {

      console.log(this.props.cards);
      let cards = this.props.cards;

      // for(let i=0; i < cards.length; i++){
      //   console.log(i);     
      // }

      return (
        <>
        <button onClick={this.handleClick}>Shake</button>
        <div className="container" style={styleCont}>

      {cards.map((value, index) => {
        return <img alt={cards[index].name} src={cards[index].image} className='img-thumbnail' style={styles}/>
      })}
                        
      </div>
      </>
      );
    }
  }
  
export default Cards;

