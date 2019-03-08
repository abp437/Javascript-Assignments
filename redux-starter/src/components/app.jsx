import ReactDOM from 'react-dom';
import { log, grabElement } from '../utils/utils';
import Ninja from './Ninja';

class App extends React.Component {
  static handleButtonClick(event) {
    log(event.target, Math.random(200) * 100);
  }

  static handleSubmit(event) {
    event.preventDefault();
    log(`Form Submitted ${grabElement('es6-features').value}`);
  }

  constructor(props) {
    super(props);
    this.state = {
      name: 'Mein Fuhrer',
    };
  }

  handleChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  render() {
    const { name, } = this.state;
    return (
      <div className="d-flex container">
        <h1>{name}</h1>
        <button type="button" onClick={App.handleButtonClick}>Click me</button>
        <form onSubmit={App.handleSubmit}>
          <input type="text" id="es6-features" onChange={this.handleChange.bind(this)} />
          <button type="submit">Submit</button>
        </form>
        <Ninja belt="Black" />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('reduxBasics')
);
