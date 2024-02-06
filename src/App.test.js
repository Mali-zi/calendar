import { render, screen } from '@testing-library/react';
import App from './App';

test('it renders App properly', () => {
  render(<App />);
  screen.getByTestId('datepicker');
});
