import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Simple Jenkins link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Simple Jenkins/i);
  expect(linkElement).toBeInTheDocument();
});
