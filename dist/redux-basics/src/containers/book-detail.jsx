import { connect } from 'react-redux';

class BookDetail extends React.Component {
  render() {
    if (!this.props.book) {
      return <h2>Select a Book to get started</h2>
    }

    return (
      <div>
        <span>Title:</span>
        <h2>{this.props.book.title}</h2>
        <span>Pages:</span>
        <h2>{this.props.book.pages}</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
