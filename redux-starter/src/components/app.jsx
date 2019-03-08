import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textContent: 'Heil Mein Fuhrer, Adolf Hitler',
    };
  }

  render() {
    const { textContent, } = this.state;
    return (
      <div className="d-flex container">
        <h1>{textContent}</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('reduxBasics')
);
