import ReactDOM from 'react-dom';
import BookList from 'Containers/book-list';
import BookDetail from 'Containers/book-detail';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'Reducers';

class App extends React.Component {
  render() {
    return (
      <div className='d-flex container'>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('reduxBasics')
);
