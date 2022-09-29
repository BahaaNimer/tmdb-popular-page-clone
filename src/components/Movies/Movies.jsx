import React, { useState, useEffect } from 'react';

import axios from '../API/axios.js';
import { Container } from '../Share/Container/Container';
import { ButtonLoadMore } from '../Share/Buttons/Button';
import MovieItem from './MovieItem/MovieItem.jsx';
import { useFetchContext } from '../API/fetch';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const { url } = useFetchContext();

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
    setPage(page + 1);
  };

  return (
    <Container>
      <MovieItem movies={movies} />
      <ButtonLoadMore onClick={loadMoreHandler}>Load More</ButtonLoadMore>
    </Container>
  );
}

export default Movies;
