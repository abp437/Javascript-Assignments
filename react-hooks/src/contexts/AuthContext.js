import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

export default class AuthContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
    this.toggleAuth = this.toggleAuth.bind(this);
  }

  toggleAuth() {
    const { isAuthenticated } = this.state;
    this.setState({
      isAuthenticated: !isAuthenticated,
    })
  }

  render() {
    const { toggleAuth } = this;
    return (
      <AuthContext.Provider value={{ ...this.state, toggleAuth }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
