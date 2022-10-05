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
});

test('should check if the logo rendered', () => {
  const logo = screen.getAllByRole('img', { name: 'logo' });

  expect(logo).toBeDefined();
});

test('should check if the navbar search rendered', () => {
  const navSearch = screen.getAllByRole('img', { name: 'Search' });

  expect(navSearch).toBeDefined();
});

test('should check if the navbar list container has two elements', () => {
  const navList = screen.getAllByRole('list');

  expect(navList.length).toBe(2);
});

test('should check if the navbar list items has nine elements', () => {
  const navListItems = screen.getAllByRole('listitem');

  expect(navListItems.length).toBe(9);
});

test('should check if the navbar list item movies contain "a" element', () => {
  const navListItem = screen.getByRole('link', { name: 'Movies' });

  expect(navListItem).toContainHTML('a');
});
test('should check if the navbar list item tv shows contain "a" element', () => {
  const navListItem = screen.getByRole('link', { name: 'Tv Shows' });

  expect(navListItem).toContainHTML('a');
});
test('should check if the navbar list item people contain "a" element', () => {
  const navListItem = screen.getByRole('link', { name: 'People' });

  expect(navListItem).toContainHTML('a');
});
test('should check if the navbar list item more contain "a" element', () => {
  const navListItem = screen.getByRole('link', { name: 'More' });

  expect(navListItem).toContainHTML('a');
});
test('should check if the navbar list item + contain "a" element', () => {
  const navListItem = screen.getByRole('link', { name: '+' });

  expect(navListItem).toContainHTML('a');
});
test('should check if the navbar list item en contain "a" element', () => {
  const navListItem = screen.getByRole('link', { name: 'EN' });

  expect(navListItem).toContainHTML('a');
});
test('should check if the navbar list item login contain "a" element', () => {
  const navListItem = screen.getByRole('link', { name: 'Login' });

  expect(navListItem).toContainHTML('a');
});
test('should check if the navbar list item join tmdb contain "a" element', () => {
  const navListItem = screen.getByRole('link', { name: 'Join TMDB' });

  expect(navListItem).toContainHTML('a');
});
