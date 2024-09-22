import React from 'react';
import './Genre.css';

const Genre = ({ genres, onSelectGenre }) => {
  return (
    <div classname='estilo-genero'>
      <h2>Selecione el Género</h2>
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
