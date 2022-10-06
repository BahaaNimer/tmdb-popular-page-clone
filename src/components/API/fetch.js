import React, { createContext, useContext, useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;
export const API_SECRET = `api_key=${API_KEY}`;

export const FetchContext = createContext();

const FetchContextProvider = ({ children }) => {
  const [dataSort, setDataSort] = useState('popularity.desc');
  const [url, setUrl] = useState(
    `/discover/movie?sort_by=${dataSort}&${API_SECRET}&language=en-US`,
  );
  const [rest, setRest] = useState('');

  useEffect(() => {
    let request = `/discover/movie?sort_by=${dataSort}&${API_SECRET}&language=en-US`;
    setUrl(request);
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
