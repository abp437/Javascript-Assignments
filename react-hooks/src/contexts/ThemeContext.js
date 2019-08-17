import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLightTheme: true,
      light: {
        syntax: '#555',
        ui: '#ddd',
        bg: '#eee',
      },
      dark: {
        syntax: '#ddd',
        ui: '#333',
        bg: '#555',
      }
    }
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    const { isLightTheme } = this.state;
    this.setState({
      isLightTheme: !isLightTheme,
    })
  }

  render() {
    const { toggleTheme } = this;
    return (
      <ThemeContext.Provider value={{ ...this.state, toggleTheme, }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}