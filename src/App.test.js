import { render } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  const renderedApp = render(<App />);

  expect(renderedApp).toBeDefined();
});
