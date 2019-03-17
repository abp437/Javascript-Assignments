import { combineReducers } from 'redux';
import BooksReducer from 'Reducers/reducer-books';
import ActiveBookReducer from 'Reducers/reducer-active-book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
