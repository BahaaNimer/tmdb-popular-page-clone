import React, { useState, useEffect } from 'react';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';

import axios from '../API/axios.js';
import './Movies.css';
import LoadingSkeleton from '../Utilty/loadingSkeleton.js';
import 'react-loading-skeleton/dist/skeleton.css';

function Movies({ fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  const imageBaseUrl = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    // console.log('fetchURL', fetchUrl);
    fetchData();
  }, [fetchUrl]);

  const handleClick = () => {
    if (trailerUrl) {
      setTrailerUrl('');
    }
  };

  return (
    <div className='container'>
      <div className='row-posters'>
        {movies.length ? (
          movies.sort().map((movie) => {
            return (
              <div
                key={movie.id}
                className='each-movie-box'>
                <img
                  onClick={() => {
                    handleClick(movie);
                  }}
                  className={`row-poster`}
                  src={
                    `${imageBaseUrl}${movie?.poster_path}` ||
                    `${imageBaseUrl}${movie?.backdrop_path}`
                  }
                  alt={movie.name}
                />
                <span className='circular-progress-bar'>
                  <CircularProgressBar
                    percent={movie.vote_average * 10}
                    linearGradient={['#18cdb5', '#1fb76d']}
                    colorSlice={'#081c22'}
                    colorCircle={'#081c22'}
                    fontColor={'#fff'}
                    fontSize={'1.8rem'}
                    fontWeight={400}
                    size={40}
                    cut={0}
                    rotation={-90}
                    opacity={10}
                    fill={'#032541'}
                    unit={'%'}
                    textPosition={'0.35em'}
                  />
                </span>
                <div className='row-poster-content'>
                  <h3 className='movie-title'>
                    {movie?.title ||
                      movie?.original_title ||
                      movie?.name ||
                      movie?.original_name}
                  </h3>
                  <p className='movie-date'>{movie?.release_date}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div style={{ display: 'flex' }}>
            <LoadingSkeleton />
          </div>
        )}
        <div className='row-posters-blur'></div>
      </div>
    </div>
  );
}

export default Movies;
