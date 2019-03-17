import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectBook from '../actions/index';

const BookList = (props) => {
  const { books, } = props,
    bookList = books.length ? (
      books.map(book => (
        <li key={book.id}>
          <span>{book.title}</span>
          <button type="button" onClick={() => props.selectBook(book)}>Select</button>
        </li>
      ))
    ) : (
      <li>No Book Available</li>
    );
  return (
    <div>
      <ul>
        {bookList}
      </ul>
    </div>
  );
},
  // Anything returned from this function will end up as props in BookList Component
  mapStateToProps = state => ({
    books: state.books,
  }),
  // Anything returned from this function will end up as props in BookList Component
  mapDispatchToProps = dispatch => (
    // Whenever selectBook is called, the result should be passed to all our reducers
    bindActionCreators({
      selectBook,
    }, dispatch)
  );

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  selectBook: PropTypes.func,
};

BookList.defaultProps = {
  books: [],
  selectBook: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
