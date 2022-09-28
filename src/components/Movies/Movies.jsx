import React, { useState, useEffect } from 'react';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';

import axios from '../API/axios.js';
import { ButtonLoadMore } from '../Share/Buttons/Button';
import { Card } from '../Share/Card/Card.js';
import './Movies.css';
import LoadingSkeleton from '../Utilty/loadingSkeleton.js';
import 'react-loading-skeleton/dist/skeleton.css';

function Movies({ fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const imageBaseUrl = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${fetchUrl}`);
      let movieData = request.data.results;
      setMovies(movieData);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${fetchUrl}&page=${page}`);
      let movieData = request.data.results;
      setMovies([...movies, ...movieData]);

      return request;
    }
    fetchData();
    // eslint-disable-next-line
  }, [page]);

  const loadMoreHandler = () => {
    setPage(page + 1);
    console.log('page :>> ', page);
  };

  return (
    <Card className='container'>
      <div className='row-posters'>
        {movies.length ? (
          movies.map((movie) => {
            return (
              <div
                key={movie.id}
                className='each-movie-box'>
                <img
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
        <ButtonLoadMore
          className='load-more'
          onClick={loadMoreHandler}>
          Load More
        </ButtonLoadMore>
        <div className='row-posters-blur'></div>
      </div>
    </Card>
  );
}

export default Movies;
