import React from 'react';

// Inline CSS
const styles = {
  backgroundColor: '#5133a4',
  height: '90px',
  color: 'white',
  fontSize: '34px',
  fontWeight: 'bold',
  paddingLeft: '100px',
  paddingRight: '100px',
};

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar fixed-top" style={styles}>
        <div>Clicky Game</div>
        <div>Click an Image to Begin</div>
        <div>
          Score: {this.props.score} | Topscore: {this.props.topscore}
        </div>
      </nav>
    );
  }
}

export default Header;
