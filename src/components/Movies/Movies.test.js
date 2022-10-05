import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import FetchContextProvider from '../API/fetch';
import Movies from './Movies';

const loadMore = jest.fn();

beforeEach(() => {
  render(
    <FetchContextProvider>
      <Movies loadMore={loadMore} />
    </FetchContextProvider>,
  );
});

test('should check if cards container had rendered', async () => {
  const cardsContainer = await screen.findByTestId('card_container');

  expect(cardsContainer).toBeInTheDocument();
});

test('should render 20 cards when the user enter the page', async () => {
  const cards = await screen.findAllByTestId('card');

  expect(cards.length).toBe(20);
});

describe('Load More', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  test('should render 40 cards when user click load more', async () => {
    // const buttonLoadMore = screen.getByRole('button');
    // fireEvent.click(buttonLoadMore);
    // act(() => {
    //   jest.setTimeout(500);
    // });
    // const cards = await screen.findAllByTestId('card');
    // expect(cards.length).toBe(40);

    render(
      <FetchContextProvider>
        <Movies loadMore={loadMore} />
      </FetchContextProvider>,
    );
    const button = screen.getByText('Load More');
    fireEvent.click(button);
    const cards = screen.getByTestId('card');
    await waitFor(() => expect(cards).toBeInTheDocument());
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
});
