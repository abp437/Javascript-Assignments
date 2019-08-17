import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
  const { isLightTheme, light, dark, } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { bg, syntax, } = theme;
  return (
    <div className="book-list" style={{ color: syntax, background: bg }}>
      <ul>
        <li style={{ background: bg }}>The way of kings</li>
        <li style={{ background: bg }}>The name of the wind</li>
        <li style={{ background: bg }}>The final empire</li>
      </ul>
    </div>
  );
};

export default BookList;
