import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const idGenerator = () => (
    Math.floor((Math.random() * 1000) * (Math.random() * 1000))
  );
  const [books, setBooks] = useState([
    { id: idGenerator(), title: 'Steve Jobs', },
    { id: idGenerator(), title: 'Influence', },
    { id: idGenerator(), title: 'Change by Design' },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;