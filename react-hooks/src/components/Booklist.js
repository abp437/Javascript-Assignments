import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  const { isLightTheme, light, dark, } = useContext(ThemeContext);
  const { books, } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  const { bg, syntax, } = theme;
  return (
    <div className="book-list" style={{ color: syntax, background: bg }}>
      <ul>
        {
          books.map((book) => {
            const { id, title } = book;
            return (
              <li key={id} style={{ background: bg }}>{title}</li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default BookList;
