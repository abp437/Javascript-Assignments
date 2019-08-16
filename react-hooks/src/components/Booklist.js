import React, { Component } from 'react';

class BookList extends Component {
  render() {
    return (
      <div>
        <ul className="book-list">
          <li>The way of kings</li>
          <li>The name of the wind</li>
          <li>The final empire</li>
        </ul>
      </div>
     );
  }
}

export default BookList;
