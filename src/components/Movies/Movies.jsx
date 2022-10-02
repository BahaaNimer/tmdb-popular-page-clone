import React, { useState, useEffect, useRef, useCallback } from 'react';
import LoadingBar from 'react-top-loading-bar';

import axios from '../API/axios.js';
import MovieItem from './MovieItem/MovieItem.jsx';
import { useFetchContext } from '../API/fetch';
import styled from 'styled-components';
import { styles } from '../../styles/styles.js';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  top: 50px;
  margin-bottom: ${(props) => props.styles.margin.m50x};
  width: ${(props) => props.styles.width.w100};
`;

const ButtonLoadMore = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-65px, 1px);
  position: relative;
  margin-top: ${(props) => props.styles.margin.m10x};
  margin-bottom: ${(props) => props.styles.margin.m3};
  width: ${(props) => props.styles.width.w100};
  border-radius: ${(props) => props.styles.border_radius.br10};
  height: ${(props) => props.styles.height.h45x};
  background-color: ${(props) => props.styles.color.l_blue};
  color: ${(props) => props.styles.color.l_white};
  font-size: x-large;
  font-weight: ${(props) => props.styles.font_weight.w7};

  &:hover {
    background-color: ${(props) => props.styles.color.d_blue};
  }

  @media (max-width: ${(props) => props.styles.max_width.w1300x}) {
    margin-left: ${(props) => props.styles.margin.m10};
    width: ${(props) => props.styles.width.w95};
  }

  @media (max-width: ${(props) => props.styles.max_width.w800x}) {
    margin-left: ${(props) => props.styles.margin.m15};
    width: ${(props) => props.styles.width.w100};
  }

  @media (max-width: ${(props) => props.styles.max_width.w530x}) {
    margin-left: ${(props) => props.styles.margin.m20};
    width: ${(props) => props.styles.width.w100};
  }

  @media (max-width: ${(props) => props.styles.max_width.w475x}) {
    margin-left: ${(props) => props.styles.margin.m30};
    width: ${(props) => props.styles.width.w100};
  }
`;

function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const { url } = useFetchContext();
  const ref = useRef(null);
  const loop = useRef();
  const lastMovieRef = useCallback(
    (node) => {
      if (loop.current) return loop.current.disconnect();
      loop.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersection) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) loop.current.observe(node);
    },
    [],
  );

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${url}`);
      let movieData = request.data.results;
      setMovies(movieData);
      return request;
    }
    fetchData();
  }, [url]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${url}&page=${page}`);
      let movieData = request.data.results;
      setMovies([...movies, ...movieData]);

      return request;
    }
    fetchData();
    // eslint-disable-next-line
  }, [page]);

  const loadMoreHandler = () => {
    ref.current.continuousStart();
    setTimeout(() => {
      ref.current.complete();
      setPage(page + 1);
    }, 500);
  };

  return (
    <Container styles={styles}>
      <LoadingBar
        color={styles.color.l_blue}
        ref={ref}
      />

      <MovieItem movies={movies} />
      <ButtonLoadMore
        ref={lastMovieRef}
        styles={styles}
        onClick={loadMoreHandler}>
        Load More
      </ButtonLoadMore>
    </Container>
  );
}

export default Movies;
