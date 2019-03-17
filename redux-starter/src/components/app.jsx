import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RootReducer from './booksPage/reducers/index';
import Home from './homePage/home';
import About from './about';
import PostsList from './postsPage/postsList';
import Post from './postsPage/post';
import PizzaHome from './pizzaPage/pizzaHome';
import BooksHome from './booksPage/components/booksHome';
import Contact from './contact';
import Navbar from './navbar';


const store = createStore(RootReducer),
  App = () => (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" render={routeProps => <About {...routeProps} title="About" />} />
            <Route exact path="/posts" component={PostsList} />
            <Route path="/posts/:id" component={Post} />
            <Route path="/pizzas" component={PizzaHome} />
            <Route path="/books" component={BooksHome} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );

ReactDOM.render(
  <App />,
  document.getElementById('reduxBasics')
);
