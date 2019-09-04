/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

// Inline CSS
const styles = {
  backgroundColor: '#5133a4',
  height: '80px',
  color: 'white',
  fontSize: '28px',
  paddingLeft: '150px',
  paddingRight: '70px',
};

// Header Component with props from App.js
class Header extends React.Component {
  render() {
    return (
      <nav className="navbar fixed-top" style={styles}>
        <div>Clicky Game</div>
        <div id="message">{this.props.message}</div>
        <div>
          Score: {this.props.score} | Topscore: {this.props.topscore}
        </div>
      </nav>
    );
  }
}

// Export the component so it is available to others
export default Header;
