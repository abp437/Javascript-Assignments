import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>{(authContext) => (
        <ThemeContext.Consumer>{(themeContext) => {
          const { isLightTheme, light, dark, } = themeContext;
          const { isAuthenticated, toggleAuth } = authContext;
          const theme = isLightTheme ? light : dark;
          const { ui, syntax } = theme;
          return (
            <nav style={{ background: ui, color: syntax }}>
              <h1>Context App</h1>
              <div onClick={() => { toggleAuth() }}>
                {isAuthenticated ? 'Logged In' : 'Logged Out'}
              </div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
        </ThemeContext.Consumer>
      )}</AuthContext.Consumer>
    );
  }
}

export default Navbar;
