import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';
import FetchContextProvider from './components/API/fetch';

beforeEach(() => {
  render(
    <FetchContextProvider>
      <App />
    </FetchContextProvider>,
  );
});

test('should check if components rendered', async () => {
  const app = screen.getByTestId('wrapper');
  expect(app).toBeDefined();
});
