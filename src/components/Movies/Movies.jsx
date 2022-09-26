import React, { useState, useEffect } from 'react';

import axios from '../../axios.js';
import SortBy from '../SortBy/SortBy.jsx';
import './Movies.css';

function Movies({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  const imageBaseUrl = 'https://image.tmdb.org/t/p/original';

  // a snippet of code that runs on specific condition / variable.
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const handleClick = () => {
    if (trailerUrl) {
      setTrailerUrl('');
    }
  };

  return (
    <div className='movies'>
      <SortBy />
      <h2 className='category-title'>{title}</h2>
      <div className='row-posters'>
        {movies.map((movie) => {
          return (
            <div
              key={movie.id}
              className='each-movie-box'>
              <img
                onClick={() => {
                  handleClick(movie);
                }}
                className={`row-poster`}
                src={`${imageBaseUrl}${movie?.poster_path}`}
                alt={movie.name}
              />
              <div className='row-poster-content'>
                <h2 className='movie-title'>
                  {movie?.title ||
                    movie?.original_title ||
                    movie?.name ||
                    movie?.original_name}
                </h2>
                <p className='movie-date'>{movie?.release_date}</p>
              </div>
            </div>
          );
        })}
        <div className='row-posters-blur'></div>
      </div>
    </div>
  );
}

export default Movies;
