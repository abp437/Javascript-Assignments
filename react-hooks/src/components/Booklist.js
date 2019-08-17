import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  render() {
    return (
      <ThemeContext.Consumer>{(context) => {
        const { isLightTheme, light, dark, } = context;
        const theme = isLightTheme ? light : dark;
        const { bg, syntax } = theme;
        return (
          <div className="book-list" style={{ color: syntax, background: bg }}>
            <ul>
              <li style={{ background: bg }}>The way of kings</li>
              <li style={{ background: bg }}>The name of the wind</li>
              <li style={{ background: bg }}>The final empire</li>
            </ul>
          </div>
        );
      }}
      </ThemeContext.Consumer>
    );
  }
}

export default BookList;
