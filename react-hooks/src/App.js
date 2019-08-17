import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/Booklist';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';
import ThemeToggle from './components/ThemeToggle';
import SongList from './components/SongList';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
          <SongList />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
