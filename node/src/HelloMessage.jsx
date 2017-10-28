import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello from React</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage />,
  document.getElementById('container')
);
