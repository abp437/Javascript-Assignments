import React, { Component } from 'react';


class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </React.Fragment>
     );
  }
}

export default Navbar;
