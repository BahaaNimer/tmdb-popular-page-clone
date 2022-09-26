import React from 'react';

import Navbar from './components/nav/Navbar';
import Movies from './components/Movies/Movies';
import Footer from './components/Footer/Footer';
import requests from './requests';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Movies
        title='Popular Movies'
        fetchUrl={requests.fetchPopular}
      />
      <Footer />
    </div>
  );
}

export default App;
