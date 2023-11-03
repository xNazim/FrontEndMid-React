import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders App component without crashing', () => {
  const { getByText } = render(<App />);
  

  const todoAppText = getByText(/Todo App/i);
  expect(todoAppText).toBeInTheDocument();
});

test('renders TodoList component inside App component', () => {
  const { getByTestId } = render(<App />);
  

  const todoListElement = getByTestId('todo-list');
  expect(todoListElement).toBeInTheDocument();
});
