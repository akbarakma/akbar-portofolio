import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Homepage from './pages/homepage';

test('renders the portfolio homepage', async () => {
  render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  );
  expect(await screen.findByRole('heading', { name: /Akbar Danial Akma/i })).toBeInTheDocument();
});
