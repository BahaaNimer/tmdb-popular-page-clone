import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import 'react-loading-skeleton/dist/skeleton.css';
import LoadingSkeleton from '../../Utilty/loadingSkeleton.js';
import { CardsContainer } from '../../Share/CardsContainer/CardsContainer';
import { Card } from '../../Share/Card/Card.js';
import styled from 'styled-components';

const ProgressBar = styled.span`
  z-index: 1;
  transform: translate(10px, -21px);
`;

const RowPoster = styled.img`
  cursor: pointer;
  max-width: 100%;
  height: 320px;
  border-radius: 10px 10px 0 0;
  display: block;

  &:hover {
    cursor: pointer;
    transform: scale(1.04);
  }
`;

const RowPosterContent = styled.div`
  padding-left: 10px;
`;

const MovieTitle = styled.h3`
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 700;
`;

const MovieDate = styled.p`
  padding-top: 5px;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
`;

const RowPostersBlur = styled.div`
  width: 60px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  pointer-events: none;
`;

const MovieItem = ({ movies }) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original';

  return (
    <CardsContainer>
      {movies.length ? (
        movies.map((movie) => {
          return (
            <Card key={movie.id}>
              <RowPoster
                src={
                  `${imageBaseUrl}${movie?.poster_path}` ||
                  `${imageBaseUrl}${movie?.backdrop_path}`
                }
                alt={movie.name}
              />
              <ProgressBar>
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
              </ProgressBar>
              <RowPosterContent>
                <MovieTitle>
                  {movie?.title ||
                    movie?.original_title ||
                    movie?.name ||
                    movie?.original_name}
                </MovieTitle>
                <MovieDate>{movie?.release_date}</MovieDate>
              </RowPosterContent>
            </Card>
          );
        })
      ) : (
        <div style={{ display: 'flex' }}>
          <LoadingSkeleton />
        </div>
      )}
      <RowPostersBlur></RowPostersBlur>
    </CardsContainer>
  );
};

MovieItem.propTypes = {
  props: PropTypes.array,
};
export default MovieItem;
