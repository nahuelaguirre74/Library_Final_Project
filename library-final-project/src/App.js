import React, { useState } from 'react';
import Login from './components/Login';
import Genre from './components/Genre';
import BookList from './components/BookList';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const genres = ['Fiction', 'Non-Fiction', 'Science Fiction', 'Biography'];
  const books = [
    { title: 'Book One', author: 'Author One' },
    { title: 'Book Two', author: 'Author Two' },
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSelectGenre = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : !selectedGenre ? (
        <Genre genres={genres} onSelectGenre={handleSelectGenre} />
      ) : (
        <BookList genre={selectedGenre} books={books} />
      )}
    </div>
  );
};

export default App;
