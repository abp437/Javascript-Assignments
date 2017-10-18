import React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './pages/Header';

class App extends React.Component {
  render() {
    return(
      <div>
        <Header/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
