import React from 'react';
import ReactDOM from 'react-dom/client';
import FetchContextProvider from './components/API/fetch';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FetchContextProvider>
      <App />
    </FetchContextProvider>
  </React.StrictMode>,
);
