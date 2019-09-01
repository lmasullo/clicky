import React from 'react';

// Inline CSS
// #6956af #5133a4

const styleFoot = {
  backgroundColor: '#6956af',
  height: '50px',
  color: 'white',
};

const styleFoot2 = {
  backgroundColor: '#5133a4',
  height: '40px',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '18px',
  textAlign: 'left',
};

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="footer" style={styleFoot}></footer>
        <footer className="footer" style={styleFoot2}>
          <div className="container">
            <span className="mt-3">
              Clicky Game!
              <img
                className="mt-2"
                alt="React"
                src="../images/react.svg"
                height="20px"
                width="20px"
              ></img>
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
