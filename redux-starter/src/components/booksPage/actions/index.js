const selectBook = book => (
  // selectBook is an Action Creator, it needs to return an action,
  // An object with a type property.
  {
    type: 'BOOK_SELECTED',
    payload: book,
  }
);

export default selectBook;
