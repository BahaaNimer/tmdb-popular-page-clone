import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useHooks } from '../Utilty/useHooks';
import { renderHook } from '@testing-library/react-hooks';
import FetchContextProvider from '../API/fetch';
import Movies from './Movies';

beforeEach(() => {
  render(
    <FetchContextProvider>
      <Movies />
    </FetchContextProvider>,
  );
});

test('should check if cards container had rendered', async () => {
  const cardsContainer = await screen.findByTestId('cardContainer');

  expect(cardsContainer).toBeInTheDocument();

  const cards = await screen.findAllByTestId('card');

  expect(cards.length).toBeTruthy();
});


test('should check if the button triggered', async () => {
  const buttonLoadMore = screen.getByRole('button', { name: 'Load More' });
  const cards = await screen.findAllByTestId('card');
  fireEvent.click(buttonLoadMore);
  expect(cards.length).toBeTruthy();
});

test('check if the user click load more button it will change the state', async () => {
  const cards = await screen.findAllByTestId('card');

  const button = screen.getByRole('button', { name: 'Load More' });
  fireEvent.click(button);
  waitFor(() => expect(cards.length).toBeTruthy());
});

test('check if we scroll after clicking in load more3 button it will go in infinite scroll', async () => {
  const { result } = renderHook(useHooks);

  const cards = await screen.findAllByTestId('card');

  const button = screen.getByRole('button', { name: 'Load More' });
  waitFor(() => expect(result.current.page).toBe(1));

  fireEvent.click(button);

  waitFor(() => expect(result.current.page).toBe(2));

  fireEvent.scroll(window, { y: 100 });
  waitFor(() => expect(cards.length).toBeTruthy());

  fireEvent.scroll(window, { y: 200 });
  waitFor(() => expect(cards.length).toBeTruthy());

  fireEvent.scroll(window, { y: 1200 });
  waitFor(() => expect(result.current.page).toBeGreaterThan(1));

  waitFor(() => expect(cards.length).not.toBeTruthy());
});

test('check if for the initial state as expected', async () => {
  const { result } = renderHook(useHooks);

  const cards = await screen.findAllByTestId('card');

  waitFor(() => expect(result.current.page).toBe(1));

  expect(cards.length).toBe(20);
});
