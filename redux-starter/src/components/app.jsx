import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './homePage/home';
import About from './about';
import PostsList from './postsPage/postsList';
import Post from './postsPage/post';
import Contact from './contact';
import Navbar from './navbar';

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={routeProps => <About {...routeProps} title="About" />} />
        <Route exact path="/posts" component={PostsList} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  <App />,
  document.getElementById('reduxBasics')
);
