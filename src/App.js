import React from 'react';

import FetchContextProvider from './components/API/fetch';
import Navbar from './components/Navbar/Navbar';
import Movies from './components/Movies/Movies';
import Footer from './components/Footer/Footer';
import SortBy from './components/SortBy/SortBy';
import styled from 'styled-components';
import { styles } from './components/styles/styles';

const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${(props) => props.styles.width.w100};
`;

const AppHolder = styled.div`
  display: flex;

  @media (max-width: ${(props) => props.styles.max_width.w1300x}) {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.h2`
  position: relative;
  margin: ${(props) => props.styles.margin.m50x};
  z-index: 1;
  transform: translate(10px, 70px);
  padding-left: ${(props) => props.styles.padding.p100x};
  margin-top: ${(props) => props.styles.margin.m0};

  @media (max-width: ${(props) => props.styles.max_width.w485x}) {
    z-index: 0;
    padding: ${(props) => props.styles.padding.p0};
  }
`;

const SortSection = styled.section`
  width: ${(props) => props.styles.width.w35};
  display: flex;
  justify-content: center;
  align-items: stretch;

  @media (max-width: ${(props) => props.styles.max_width.w1300x}) {
    width: ${(props) => props.styles.width.w100};
    height: ${(props) => props.styles.height.h300x};
  }
`;

const MoviesSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: ${(props) => props.styles.width.w70};

  @media (max-width: ${(props) => props.styles.max_width.w1300x}) {
    width: ${(props) => props.styles.width.w100};
    align-items: center;
  }
`;

function App() {
  return (
    <FetchContextProvider>
      <AppBody styles={styles}>
        <Navbar />

        <Title styles={styles}>Popular Movies</Title>

        <AppHolder styles={styles}>
          <SortSection styles={styles}>
            <SortBy />
          </SortSection>

          <MoviesSection styles={styles}>
            <Movies />
          </MoviesSection>
        </AppHolder>

        <Footer />
      </AppBody>
    </FetchContextProvider>
  );
}

export default App;
