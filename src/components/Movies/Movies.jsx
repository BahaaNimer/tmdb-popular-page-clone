import React, { useState, useEffect, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';
import InfiniteLoader from 'react-infinite-loader';

import axios from '../API/axios.js';
import MovieItem from './MovieItem/MovieItem.jsx';
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
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const { url, rest, setRest } = useFetchContext();
  const ref = useRef(null);

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

  const loadMoreHandler = () => {
    ref.current.continuousStart();
    setTimeout(() => {
      ref.current.complete();
      setPage(page + 1);
    }, 500);
  };

  const handleVisit = () => {
    if (page === 1) return;
    if (page > movies.length) return;
    if (page > 1) {
      ref.current.continuousStart();
      setTimeout(() => {
        ref.current.complete();
        setPage(page + 1);
      }, 500);
    }
  };

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
