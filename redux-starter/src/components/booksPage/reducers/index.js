import { combineReducers } from 'redux';
import BooksReducer from './books';
import ActiveBookReducer from './activeBook';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer,
});

export default rootReducer;
