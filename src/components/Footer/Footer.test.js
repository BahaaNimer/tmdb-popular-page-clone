import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Footer from './Footer';
import Column from './Column';

beforeEach(() => {
  render(<Footer />);
});

test('should check if the footer rendered ', () => {
  const footer = screen.getByRole('footer');
  expect(footer).toBeInTheDocument();
});
test('should check if the join section rendered ', () => {
  const joinSection = screen.getByRole('joinSection');
  expect(joinSection).toBeInTheDocument();
});
test('should check if the footer link section rendered ', () => {
  const linkSection = screen.getByRole('linkSection');
  expect(linkSection).toBeInTheDocument();
});
test('should check if the footer image rendered ', () => {
  const footerImage = screen.getByRole('img');
  expect(footerImage).toBeInTheDocument();
});
test('should check if the button (by text) rendered ', () => {
  const footerButton = screen.getByText('JOIN THE COMMUNITY');
  expect(footerButton).toBeInTheDocument();
});
test('should check if the footer button (by role) rendered ', () => {
  const footerButton = screen.getByRole('button');
  expect(footerButton).toBeInTheDocument();
});
test('should check if the footer column rendered ', async () => {
  render(
    <Column
      title={'hi'}
      link1={'link 1'}
      link2={'link 2'}
    />,
  );
  const footerTitle = await screen.findByRole('link', { name: /hi/i });
  const footerLink1 = await screen.findByRole('link', { name: /link 1/i });
  const footerLink2 = await screen.findByRole('link', { name: /link 2/i });
  expect(footerTitle).toBeInTheDocument();
  expect(footerLink1).toBeInTheDocument();
  expect(footerLink2).toBeInTheDocument();
});
test('should check if the footer column rendered with existing links ', async () => {
  render(<Column />);
  const footerTitle = await screen.findByRole('link', { name: /the basics/i });
  const footerLink1 = await screen.findByRole('link', { name: /about tmdb/i });
  const footerLink2 = await screen.findByRole('link', { name: /contact us/i });
  const footerLink3 = await screen.findByRole('link', {
    name: /support forums/i,
  });
  const footerLink4 = await screen.findByRole(
    'link',
    { name: 'API' },
    { exact: true },
  );
  const footerLink5 = await screen.findByRole('link', {
    name: /system status/i,
  });
  expect(footerTitle).toBeInTheDocument();
  expect(footerLink1).toBeInTheDocument();
  expect(footerLink2).toBeInTheDocument();
  expect(footerLink3).toBeInTheDocument();
  expect(footerLink4).toBeInTheDocument();
  expect(footerLink5).toBeInTheDocument();
});
test('should check if the footer bottom section rendered ', () => {
  const footerBottomSection = screen.getByText('Build 87863fc (4378)');
  expect(footerBottomSection).toBeInTheDocument();
});

test('should check if the columns rendered', async () => {
  const columns = await screen.findAllByTestId('footer_list');
  expect(columns).toBeDefined();
});
