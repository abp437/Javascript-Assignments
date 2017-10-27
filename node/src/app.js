const stylesheet =  require('./app.sass');

console.log('Hello from Webpack Dev Server');

import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(
  <HelloMessage name="Jason" />,
  document.getElementById('container')
);
