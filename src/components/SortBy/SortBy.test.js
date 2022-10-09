import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderHook } from '@testing-library/react-hooks';
import { useHooks } from '../Utilty/useHooks';
import FetchContextProvider from '../API/fetch';
import SortBy from './SortBy';
import Movies from '../Movies/Movies';

beforeEach(() => {
  render(
    <FetchContextProvider>
      <SortBy />
    </FetchContextProvider>,
  );
});

test('should check if sort section rendered', () => {
  const sortContainer = screen.getByLabelText('Sort Results By');

  expect(sortContainer).toBeInTheDocument();

  const sortDetails = screen.getByRole('group');

  expect(sortDetails.attributes.getNamedItem('open')).toBeTruthy();

  const sortSelect = screen.getByRole('combobox', {
    name: 'Sort Results By',
  });

  expect(sortSelect).toBeTruthy();

  const sortSelectValue = screen.getByRole('combobox');

  expect(sortSelectValue.value).toBe('popularity.desc');

  const sortOption = screen.getByRole('option', {
    name: 'Popularity Ascending',
  });

  expect(sortOption.value).toBe('popularity.asc');

  const sortOptionValue = screen.getByRole('option', {
    name: 'Release Date Descending',
  });

  expect(sortOptionValue.value).toBe('release_date.desc');
});

test('should check if sort select is change value before user click as expected', () => {
  const sortContainer = screen.getByRole('combobox');

  fireEvent.change(sortContainer, { target: { value: 'popularity.asc' } });

  expect(sortContainer.value).toBe('popularity.asc');
});

test('should check if sort select is change value after user click as expected', () => {
  const sortContainer = screen.getByRole('combobox');

  const searchButton = screen.getByRole('button', { name: 'Search' });

  fireEvent.change(sortContainer, { target: { value: 'popularity.asc' } });

  fireEvent.click(searchButton);

  expect(sortContainer.value).toBe('popularity.asc');
});

test('should check if sort select is change value after user click as expected', async () => {
  render(
    <FetchContextProvider>
      <Movies />
    </FetchContextProvider>,
  );
  const { result } = renderHook(useHooks);

  const button = screen.getByRole('button', { name: 'Load More' });

  const cards = await screen.findAllByTestId('card');

  fireEvent.click(button);

  waitFor(() => expect(result.current.page).toBe(2));
  fireEvent.scroll(window, { y: 100 });

  waitFor(() => expect(cards.length).toBeTruthy());

  fireEvent.scroll(window, { y: 200 });
  waitFor(() => expect(cards.length).toBeTruthy());

  const sortContainer = screen.getByRole('combobox');

  const searchButton = screen.getByRole('button', { name: 'Search' });

  fireEvent.change(sortContainer, { target: { value: 'popularity.asc' } });

  fireEvent.click(searchButton);

  expect(sortContainer.value).toBe('popularity.asc');
  waitFor(() => expect(result.current.rest).toBe('clicked'));

  waitFor(() => expect(result.current.page).toBe(1));
  waitFor(() => expect(result.current.movies.length).toBeTruthy());
  waitFor(() => expect(result.current.rest).toBe(''));
});
