import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from './Item';

test('should display name, description and number of star', () => {
  const item = {
    html_url: 'url',
    full_name: 'name',
    description: 'description',
    stargazers_count: 25
  };

  render(<Item item={item} />);

  const name = screen.getByText(/name/i);
  expect(name).toBeInTheDocument();
  
  const description = screen.getByText(/description/i);
  expect(description).toBeInTheDocument();
  
  const star = screen.getByText(/25/i);
  expect(star).toBeInTheDocument();
});