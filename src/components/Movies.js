import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie =>
        <div className='actor'>
        <p>Name: {movie.title}</p>
        <p>Genres: <ul>{movie.genres.map(genre => <li>{genre}</li>)}</ul></p>
        <p>Metascore: {movie.metascore}</p>
        <p>Time: {movie.time}</p>
        </div>)
      }
    </div>
  );
};

export default Movies;
