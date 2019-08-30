import React from 'react';

// Inline CSS
let styles = {
   
    height: '170px',
    width: '170px',

};



class Cards extends React.Component {

    render() {

      console.log(this.props.cards);
      let cards = this.props.cards;

      return (
        <div className="container">
        <div className="row">
          <div className="col-sm">
            
      {cards.map((value, index) => {
        return <img src={cards[index].image} className='img-thumbnail' height='170px' width='170px' style={styles}/>
      })}
                        
          </div>
        </div>
      </div>
      );
    }
  }
  
export default Cards;

