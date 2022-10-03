import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import 'react-loading-skeleton/dist/skeleton.css';
import LoadingSkeleton from '../../Utilty/loadingSkeleton.js';
import styled from 'styled-components';
import { styles } from '../../styles/styles.js';

const ProgressBar = styled.span`
  z-index: 1;
  transform: translate(10px, -21px);
`;

const Icon = styled.img`
  position: absolute;
  z-index: 10;
  transform: translate(160px, 10px);
  opacity: 0.8;

  &:hover {
    opacity: 0.5;
    border-radius: ${(props) => props.styles.border_radius.br50};
    background-color: ${(props) => props.styles.color.l_blue};

  }
`;

const CardsContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  flex-wrap: wrap;
  width: ${(props) => props.styles.width.w100};
`;

const Card = styled.div`
  margin: ${(props) => props.styles.margin.m2};
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0 0.26px;
  width: ${(props) => props.styles.width.w200x};
  height: ${(props) => props.styles.height.h415x};
  border-radius: ${(props) => props.styles.border_radius.br10};
  @media (max-width: ${(props) => props.styles.max_width.w475x}) {
    width: ${(props) => props.styles.width.w70};
    margin-left: ${(props) => props.styles.margin.m70x};
  }
`;

const RowPoster = styled.img`
  display: block;
  cursor: pointer;
  max-width: ${(props) => props.styles.max_width.w100};
  height: ${(props) => props.styles.height.w320x};
  max-height: ${(props) => props.styles.height.h100};
  border-radius: ${(props) => props.styles.border_radius.br10}
    ${(props) => props.styles.border_radius.br10} 0 0;

  &:hover {
    cursor: pointer;
    transform: scale(1.04);
  }
`;

const RowPosterContent = styled.div`
  padding-left: ${(props) => props.styles.padding.p10x};
`;

const MovieTitle = styled.h3`
  cursor: pointer;
  font-size: ${(props) => props.styles.font_size.fs09r};
  font-weight: ${(props) => props.styles.font_weight.w7};
`;

const MovieDate = styled.p`
  padding-top: ${(props) => props.styles.padding.p5x};
  font-size: ${(props) => props.styles.font_size.fs09r};
  color: rgba(0, 0, 0, 0.6);
`;

const RowPostersBlur = styled.div`
  width: ${(props) => props.styles.width.w60x};
  height: ${(props) => props.styles.height.h100};
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
    <CardsContainer styles={styles}>
      {movies.length ? (
        movies.map((movie) => {
          return (
            <Card
              key={movie?.id}
              styles={styles}>
              <Icon
                styles={styles}
                src='https://img.icons8.com/color/48/000000/connection-status-off--v1.png'
                alt='moreIcon'
                width={'24px'}
                height={'24px'}
              />
              <RowPoster
                styles={styles}
                src={
                  movie.poster_path !== null
                    ? `${imageBaseUrl}${movie.poster_path}`
                    : 'https://img.icons8.com/material-outlined/96/000000/image.png'
                }
                alt={movie.name}
              />
              <ProgressBar>
                <CircularProgressBar
                  styles={styles}
                  percent={movie.vote_average * 10}
                  linearGradient={[
                    `${styles.color.l_green}`,
                    `${styles.color.green}`,
                  ]}
                  colorSlice={`${styles.color.dd_blue}`}
                  colorCircle={`${styles.color.dd_blue}`}
                  fontColor={`${styles.color.white}`}
                  fontSize={`${styles.font_size.fs18r}`}
                  fontWeight={400}
                  size={40}
                  cut={0}
                  rotation={-90}
                  opacity={10}
                  fill={'#032541'}
                  unit={'%'}
                  textPosition={`${styles.font_size.fs035}`}
                />
              </ProgressBar>
              <RowPosterContent styles={styles}>
                <MovieTitle styles={styles}>
                  {movie?.title ||
                    movie?.original_title ||
                    movie?.name ||
                    movie?.original_name}
                </MovieTitle>
                <MovieDate styles={styles}>{movie?.release_date}</MovieDate>
              </RowPosterContent>
            </Card>
          );
        })
      ) : (
        <div style={{ display: 'flex' }}>
          <LoadingSkeleton />
        </div>
      )}
      <RowPostersBlur styles={styles}></RowPostersBlur>
    </CardsContainer>
  );
};

MovieItem.propTypes = {
  props: PropTypes.array,
};
export default MovieItem;
