import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import SortBy from './SortBy';

beforeEach(() => {
  render(<SortBy />);
});

test('should check if the sort by section is rendering or not', () => {
  const sortContainer = screen.getAllByRole('div');

  expect(sortContainer).toBeInTheDocument();
});
