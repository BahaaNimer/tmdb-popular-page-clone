import { useState, useRef } from 'react';

export const useHooks = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const ref = useRef(null);

  const loadMoreHandler = () => {
    ref.current.continuousStart();
    setPage(page + 1);
    ref.current.complete();
  };

  const handleVisit = () => {
    if (page === 1) return;
    if (page > movies.length) return;
    if (page > 1) {
      ref.current.continuousStart();
      setPage(page + 1);
      ref.current.complete();
    }
  };

  return {
    handleVisit,
    loadMoreHandler,
    movies,
    page,
    ref,
    setMovies,
    setPage,
  };
};
