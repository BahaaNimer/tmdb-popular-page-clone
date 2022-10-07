import React, { useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';
import InfiniteLoader from 'react-infinite-loader';

import MovieItem from './MovieItem/MovieItem.jsx';
import { useHooks } from '../Utilty/useHooks.js';
import axios from '../API/axios';
import { useFetchContext } from '../API/fetch';
import styled from 'styled-components';
import { color, font_size, font_weight } from '../styles/styles.js';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  top: 50px;
  margin-bottom: 50px;
  width: 100%;
`;

const ButtonLoadMore = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-65px, 1px);
  position: relative;
  margin-top: 10px;
  margin-bottom: 3%;
  width: 95%;
  border-radius: 10px;
  height: 45px;
  background-color: ${color.l_blue};
  color: ${color.l_white};
  font-size: ${font_size.xl};
  font-weight: ${font_weight.w7};

  &:hover {
    background-color: ${color.d_blue};
  }

  @media (max-width: 1300px) {
    margin-left: 10%;
    width: 95%;
  }

  @media (max-width: 800px) {
    margin-left: 15%;
    width: 100%;
  }

  @media (max-width: 530px) {
    margin-left: 20%;
    width: 100%;
  }

  @media (max-width: 475px) {
    margin-left: 30%;
    width: 100%;
  }
`;

function Movies() {
  const { url, rest, setRest } = useFetchContext();

  const {
    handleVisit,
    loadMoreHandler,
    movies,
    page,
    ref,
    setMovies,
    setPage,
  } = useHooks();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${url}&page=${page}`);
      let movieData = request.data.results;
      if (page === 1) {
        setMovies(movieData);
      } else if (rest === 'clicked') {
        setPage(1);
        setMovies(movieData);
        setRest('');
      } else {
        setMovies([...movies, ...movieData]);
      }
      return request;
    }
    fetchData();
    // eslint-disable-next-line
  }, [url, page]);

  return (
    <Container>
      <LoadingBar
        color={color.l_blue}
        ref={ref}
      />

      <MovieItem movies={movies} />
      <InfiniteLoader onVisited={() => handleVisit()}></InfiniteLoader>
      <ButtonLoadMore onClick={loadMoreHandler}>Load More</ButtonLoadMore>
    </Container>
  );
}

export default Movies;
