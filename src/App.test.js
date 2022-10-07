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

test('should first', async () => {
  const app = screen.getByRole('wrapper');
  expect(app).toBeInTheDocument();
});
