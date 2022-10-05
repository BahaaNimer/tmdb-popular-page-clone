import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FetchContextProvider from '../API/fetch';
import SortBy from './SortBy';

const MockSubmit = jest.fn();
const MockSendDataHandler = jest.fn();

beforeEach(() => {
  render(
    <FetchContextProvider>
      <SortBy
        submit={MockSubmit}
        sendData={MockSendDataHandler}
      />
    </FetchContextProvider>,
  );
});

test('should check if sort label rendered', () => {
  const sortContainer = screen.getByLabelText('Sort Results By');

  expect(sortContainer).toBeInTheDocument();
});

test('should check if sort details is open', () => {
  const sortContainer = screen.getByRole('group');

  expect(sortContainer.attributes.getNamedItem('open')).toBeTruthy();
});

test('should check if sort select is rendered', () => {
  const sortContainer = screen.getByRole('combobox', {
    name: 'Sort Results By',
  });

  expect(sortContainer).toBeTruthy();
});

test('should check if sort select is default value as expected', () => {
  const sortContainer = screen.getByRole('combobox');

  expect(sortContainer.value).toBe('popularity.desc');
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

test('should check if sort option had the expected value', () => {
  const sortContainer = screen.getByRole('option', {
    name: 'Popularity Ascending',
  });

  expect(sortContainer.value).toBe('popularity.asc');
});
