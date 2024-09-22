import React, { useState } from 'react';

const BookList = ({ genre, books }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Books in {genre}</h2>
      
      {/* Search Bar */}
      <input 
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search by title or author"
        className="search-bar"
        aria-label="Search books"
      />

      {/* Book List */}
      <ul>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <li key={index}>
              <div className="book-card">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <button>Borrow</button>
              </div>
            </li>
          ))
        ) : (
          <p>No books found for your search.</p>
        )}
      </ul>
    </div>
  );
};

export default BookList;
