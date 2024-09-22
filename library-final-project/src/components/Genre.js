import React from 'react';

const Genre = ({ genres, onSelectGenre }) => {
  return (
    <div>
      <h2>Select a Genre</h2>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>
            <button onClick={() => onSelectGenre(genre)}>{genre}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genre;
