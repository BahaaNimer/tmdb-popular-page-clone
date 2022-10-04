import React from 'react';
import PropTypes from 'prop-types';
import 'react-loading-skeleton/dist/skeleton.css';
import LoadingSkeleton from '../../Utilty/loadingSkeleton.js';
import styled from 'styled-components';
import { color, font_size, font_weight, zIndex } from '../../styles/styles.js';

const Icon = styled.img`
  position: absolute;
  z-index: ${zIndex.z10};
  transform: translate(160px, 10px);
  opacity: 0.8;

  &:hover {
    opacity: 0.5;
    border-radius: 50%;
    background-color: ${color.l_blue};
  }
`;

const CardsContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 680px) {
    padding-left: 20%;
  }

  @media (max-width: 475px) {
    padding-left: 10%;
  }
`;

const Card = styled.div`
  margin: 2%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0 0.26px;
  width: 200px;
  height: 415px;
  border-radius: 10px;

  @media (max-width: 475px) {
    width: 70%;
    margin-left: 70px;
  }
`;

const RowPoster = styled.img`
  display: block;
  cursor: pointer;
  max-width: 100%;
  height: 320px;
  max-height: 100%;
  border-radius: 10px 10px 0 0;

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
  font-size: ${font_size.fs09r};
  font-weight: ${font_weight.w7};
`;

const MovieDate = styled.p`
  padding-top: 5px;
  font-size: ${font_size.fs09r};
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

const Bar = styled.div`
  @keyframes growProgressBar {
    0% {
      transform: rotate (0deg);
    }
    25% {
      transform: rotate (${(props) => props.average * 10}deg);
    }
    50% {
      transform: rotate (${(props) => props.average * 10}deg);
    }
    75% {
      transform: rotate (${(props) => props.average * 10}deg);
    }
    100% {
      transform: rotate (${(props) => props.average * 10}deg);
    }
  }

  @property --pgPercentage {
    syntax: '<number>';
    inherits: false;
    initial-value: 0;
  }

  &[role='progressbar'] {
    --size: 40px;
    --fg: ${color.green};
    --bg: ${color.d_blue};
    --pgPercentage: ${(props) => props.average * 10};
    animation: growProgressBar 3s 1 forwards;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: radial-gradient(
        closest-side,
        ${color.dd_blue} 80%,
        transparent 0 99.9%,
        ${color.dd_blue} 0
      ),
      conic-gradient(var(--fg) calc(var(--pgPercentage) * 1%), var(--bg) 0);
    font-family: Helvetica, Arial, sans-serif;
    font-size: calc(var(--size) / 4);
    margin-left: 5px;
    transform: translate(5px, -16px);
    color: ${color.white};
    font-weight: ${font_weight.b};
  }

  &[role='progressbar']::before {
    counter-reset: percentage ${(props) => props.average * 10};
    content: counter(percentage) '%';
  }
`;

const MovieItem = ({ movies }) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original';

  return (
    <CardsContainer>
      {movies.length ? (
        movies.map((movie) => {
          return (
            <Card key={movie?.id}>
              <Icon
                src='https://img.icons8.com/color/48/000000/connection-status-off--v1.png'
                alt='moreIcon'
                width={'24px'}
                height={'24px'}
              />
              <RowPoster
                src={
                  movie.poster_path !== null
                    ? `${imageBaseUrl}${movie.poster_path}`
                    : 'https://img.icons8.com/material-outlined/96/000000/image.png'
                }
                alt={movie.name}
              />
              <Bar
                role={'progressbar'}
                aria-valuenow={movie.vote_average * 10}
                aria-valuemin={0}
                aria-valuemax={100}
                average={movie.vote_average}></Bar>
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
