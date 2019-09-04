import React from 'react';

// Inline CSS
const styleFoot = {
  backgroundColor: '#6956af',
  height: '100px',
  color: 'white',
};

const styleFoot2 = {
  backgroundColor: '#5133a4',
  height: '40px',
  width: '100%',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '16px',
  position: 'absolute',
  bottom: '0',
  paddingTop: '10px',
  paddingLeft: '10px',
};

// Footer Component
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer fixed-bottom" style={styleFoot}>
        <div style={styleFoot2}>
          Clicky Game!
          <img
            className="pl-1 pb-1"
            alt="React Clicky Game"
            src="./images/react.svg"
            height="20px"
            width="20px"
          ></img>
        </div>
      </footer>
    );
  }
}

// Export the component so it is available to others
export default Footer;
