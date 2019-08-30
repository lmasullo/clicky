import React from 'react';

// Inline CSS
let styles = {
  backgroundImage: 'url(../images/background.svg)',
  height: '380px',
  color: 'white',
  display:'flex'
};

let styleCenter = {
  margin: 'auto'
};

let styleLarge = {
  fontSize: '4rem',
  fontWeight: 'bold',
  paddingBottom: '25px'
};

  class Instructions extends React.Component {
    render() {
      return (
        <div style={styles}>
          <div style={styleCenter}>
            <div style={styleLarge}>Clicky Game!</div>
            <h2>Click on an image to earn points, but don't click on any more than once!</h2>
          </div>    
        </div>
      );
    }
  }
  
  export default Instructions;

