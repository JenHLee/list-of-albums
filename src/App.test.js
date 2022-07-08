import { render, screen } from '@testing-library/react';
import App from './App';
import {Router} from "react-router-dom";
import {createMemoryHistory} from 'history';

test('renders learn react link', async () => {
  const history = createMemoryHistory();

  render(
    <Router location={history.location} navigator={history}>
      <App />,
    </Router>,
  );

  expect(screen.getByText(/You are Album/i)).toBeInTheDocument();
});

/* render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();*/ 