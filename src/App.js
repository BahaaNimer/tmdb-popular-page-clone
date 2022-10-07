import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Movies from './components/Movies/Movies';
import Footer from './components/Footer/Footer';
import SortBy from './components/SortBy/SortBy';
import styled from 'styled-components';
import { zIndex } from './components/styles/styles';

const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const AppHolder = styled.div`
  display: flex;

  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.h2`
  position: relative;
  margin: 50px;
  z-index: ${zIndex.z1};
  transform: translate(10px, 70px);
  padding-left: 100px;
  margin-top: 0;

  @media (max-width: 485px) {
    z-index: ${zIndex.z0};
    padding: 0;
  }
`;

const SortSection = styled.section`
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: stretch;

  @media (max-width: 1300px) {
    width: 100%;
    height: 300px;
  }
`;

const MoviesSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 70%;

  @media (max-width: 1300px) {
    width: 100%;
    align-items: center;
  }
`;

function App() {
  return (
    // eslint-disable-next-line
    <div role='wrapper'>
      <AppBody>
        <Navbar />

        <Title>Popular Movies</Title>

        <AppHolder>
          <SortSection>
            <SortBy />
          </SortSection>

          <MoviesSection>
            <Movies />
          </MoviesSection>
        </AppHolder>

        <Footer />
      </AppBody>
    </div>
  );
}

export default App;
