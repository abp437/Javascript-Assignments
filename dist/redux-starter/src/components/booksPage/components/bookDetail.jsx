import { connect } from 'react-redux';

const BookDetail = (props) => {
  const { activeBook, } = props,
    bookList = !activeBook ? (
      <span>Please Select a book</span>
    ) : (
      <span>{activeBook.title}</span>
    );

  return (
    <div>
      {bookList}
    </div>
  );
},
  // Anything returned from this function will end up as props in BookList Component
  mapStateToProps = state => ({
    activeBook: state.activeBook,
  });

BookDetail.propTypes = {
  activeBook: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
};

BookDetail.defaultProps = {
  activeBook: {},
};

export default connect(mapStateToProps)(BookDetail);
