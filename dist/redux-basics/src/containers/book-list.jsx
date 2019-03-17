import { connect } from 'react-redux';
import { selectBook } from 'Actions/index';
import { bindActionCreators } from 'redux';

class BookList extends React.Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title}
          onClick={() => {this.props.selectBook(book)}}
          className='list-group-item'>
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }
}

// Here the application state gets plugged in as Props for the component
function mapStateToProps(state) {
  // Whatever we return from here will show up as props in the Book List
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props inside of BookList
// Container.
function mapDispatchToProps(dispatch) {
  // Whenever selectBook action creator is called then the result should be
  // passed to all of our reducers and that's done through the dispatch argument
  // of bindActionCreators.
  return bindActionCreators({ selectBook }, dispatch);
}

// Connnect function takes in the mapStateToProps and returns a container.
// Promote BookList from a component to a Container - it needs to know about
// this new dispatch method, selectBook.Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
