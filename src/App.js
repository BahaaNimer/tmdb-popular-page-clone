import React, { useState } from 'react';

import Navbar from './components/nav/Navbar';
import Movies from './components/Movies/Movies';
import Footer from './components/Footer/Footer';
import requests from './components/API/requests';
import SortBy from './components/SortBy/SortBy';
import './App.css';

function App() {
  const [dataSort, setDataSort] = useState('Popularity Descending');

  const handleSortBy = (data) => {
    setDataSort(data);
  };
  // console.log('dataSort :>>', dataSort);
  // console.log('fetchRatingDesc :>>', requests.fetchRatingDesc);

  return (
    <div className='App'>
      <Navbar />
      <h2>Popular Movies</h2>
      <div className='app_container'>
        <section className='sort_section'>
          <SortBy setDataSortedBy={handleSortBy} />
        </section>
        <section className='movies_section'>
          <Movies
            fetchUrl={
              dataSort === 'Popularity Descending'
                ? requests.fetchPopularDesc
                : dataSort === 'Popularity Ascending'
                ? requests.fetchPopularAsce
                : dataSort === 'Rating Descending'
                ? requests.fetchRatingDesc
                : dataSort === 'Rating Ascending'
                ? requests.fetchRatingAsce
                : dataSort === 'Release Date Descending'
                ? requests.fetchReleaseDateDesc
                : dataSort === 'Release Date Ascending'
                ? requests.fetchReleaseDateAsce
                : dataSort === 'Title (Z-A)'
                ? requests.fetchTitleDesc
                : dataSort === 'Title (A-Z)'
                ? requests.fetchTitleAsce
                : requests.fetchPopular
            }
          />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
