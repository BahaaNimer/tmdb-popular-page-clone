import React, { createContext, useContext, useState, useMemo } from 'react';
import requests from './requests';

export const FetchContext = createContext();

const FetchContextProvider = ({ children }) => {
  const [url, setUrl] = useState({});
  const [dataSort, setDataSort] = useState('p_desc');

  useMemo(() => {
    if (dataSort === 'p_desc') {
      setUrl(requests.fetchPopularDesc);
    } else if (dataSort === 'p_asc') {
      setUrl(requests.fetchPopularAsce);
    } else if (dataSort === 'rate_desc') {
      setUrl(requests.fetchRatingDesc);
    } else if (dataSort === 'rate_asc') {
      setUrl(requests.fetchRatingAsce);
    } else if (dataSort === 'rel_desc') {
      setUrl(requests.fetchReleaseDateDesc);
    } else if (dataSort === 'rel_asc') {
      setUrl(requests.fetchReleaseDateAsce);
    } else if (dataSort === 'title_desc') {
      setUrl(requests.fetchTitleDesc);
    } else if (dataSort === 'title_asc') {
      setUrl(requests.fetchTitleAsce);
    }
  }, [dataSort]);

  const urlContext = {
    url,
    setUrl,
    dataSort,
    setDataSort,
  };

  return (
    <FetchContext.Provider value={urlContext}>{children}</FetchContext.Provider>
  );
};

export const useFetchContext = () => useContext(FetchContext);

export default FetchContextProvider;
