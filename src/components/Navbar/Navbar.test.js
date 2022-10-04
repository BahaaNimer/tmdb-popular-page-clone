import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';

beforeEach(() => {
  render(<Navbar />);
});

test('should check if the navbar rendered', () => {
  render(<Navbar />);

  const navbar = screen.getAllByRole('navigation');

  expect(navbar).toBeDefined();
});
