import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  <App />,
  document.getElementById('reduxBasics')
);
