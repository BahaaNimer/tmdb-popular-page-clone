import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';

beforeEach(() => {
  render(<Navbar />);
});

test('should check if the navbar rendered', () => {
  const navbar = screen.getAllByRole('navigation');

  expect(navbar).toBeDefined();

  const logo = screen.getAllByRole('img', { name: 'logo' });

  expect(logo).toBeDefined();

  const navSearch = screen.getAllByRole('img', { name: 'Search' });

  expect(navSearch).toBeDefined();

  const navList = screen.getAllByRole('list');

  expect(navList.length).toBe(2);

  const navListItems = screen.getAllByRole('listitem');

  expect(navListItems.length).toBe(9);

  const navListMoviesItem = screen.getByRole('link', { name: 'Movies' });

  expect(navListMoviesItem).toContainHTML('a');

  const navListTvItem = screen.getByRole('link', { name: 'Tv Shows' });

  expect(navListTvItem).toContainHTML('a');

  const navListPeopleItem = screen.getByRole('link', { name: 'People' });

  expect(navListPeopleItem).toContainHTML('a');

  const navListMoreItem = screen.getByRole('link', { name: 'More' });

  expect(navListMoreItem).toContainHTML('a');

  const navListPlusItem = screen.getByRole('link', { name: '+' });

  expect(navListPlusItem).toContainHTML('a');

  const navListEnItem = screen.getByRole('link', { name: 'EN' });

  expect(navListEnItem).toContainHTML('a');

  const navListLoginItem = screen.getByRole('link', { name: 'Login' });

  expect(navListLoginItem).toContainHTML('a');

  const navListJoinItem = screen.getByRole('link', { name: 'Join TMDB' });

  expect(navListJoinItem).toContainHTML('a');
});
