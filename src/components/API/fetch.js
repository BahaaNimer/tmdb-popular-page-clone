import React, { createContext, useContext, useState, useEffect } from 'react';
import env from 'react-dotenv';
const API_KEY = env.API_KEY;
const API_SECRET = `api_key=${API_KEY}`;

export const FetchContext = createContext();

const FetchContextProvider = ({ children }) => {
  const [dataSort, setDataSort] = useState('popularity.desc');
  const [url, setUrl] = useState(
    `/discover/movie?sort_by=${dataSort}&${API_SECRET}&language=en-US`,
  );
  const [rest, setRest] = useState('');

  useEffect(() => {
    let request;

    if (dataSort === 'release_date.desc' || dataSort === 'release_date.asc') {
      request = `/discover/movie?sort_by=${dataSort}&region=US&with_release_type=3&${API_SECRET}&language=en-US`;
      setUrl(request);
    } else {
      request = `/discover/movie?sort_by=${dataSort}&${API_SECRET}&language=en-US`;
      setUrl(request);
    }
  }, [dataSort]);

  const urlContext = {
    url,
    setUrl,
    dataSort,
    setDataSort,
    rest,
    setRest,
  };

  return (
    <FetchContext.Provider value={urlContext}>{children}</FetchContext.Provider>
  );
};

export const useFetchContext = () => useContext(FetchContext);

export default FetchContextProvider;
