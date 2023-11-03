import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Todo from '../components/Todo';

const mockTodos = [
  { id: 1, text: 'Todo 1', isComplete: false },
  { id: 2, text: 'Todo 2', isComplete: true },
];

const mockCompleteTodo = jest.fn();
const mockRemoveTodo = jest.fn();
const mockUpdateTodo = jest.fn();

test('renders Todo component with given todos', () => {
  const { getByText } = render(
    <Todo todos={mockTodos} completeTodo={mockCompleteTodo} removeTodo={mockRemoveTodo} updateTodo={mockUpdateTodo} />
  );


  const todo1 = getByText(/Todo 1/i);
  const todo2 = getByText(/Todo 2/i);
  expect(todo1).toBeInTheDocument();
  expect(todo2).toBeInTheDocument();
});

test('calls completeTodo when a todo is clicked', () => {
  const { getByText } = render(
    <Todo todos={mockTodos} completeTodo={mockCompleteTodo} removeTodo={mockRemoveTodo} updateTodo={mockUpdateTodo} />
  );


  const todo1 = getByText(/Todo 1/i);
  fireEvent.click(todo1);


  expect(mockCompleteTodo).toHaveBeenCalledWith(1);
});

test('calls removeTodo when delete icon is clicked', () => {
  const { getByTestId } = render(
    <Todo todos={mockTodos} completeTodo={mockCompleteTodo} removeTodo={mockRemoveTodo} updateTodo={mockUpdateTodo} />
  );


  const deleteIcon = getByTestId('delete-icon-1');
  fireEvent.click(deleteIcon);

  expect(mockRemoveTodo).toHaveBeenCalledWith(1);
});

test('calls setEdit when edit icon is clicked', () => {
  const { getByTestId } = render(
    <Todo todos={mockTodos} completeTodo={mockCompleteTodo} removeTodo={mockRemoveTodo} updateTodo={mockUpdateTodo} />
  );


  const editIcon = getByTestId('edit-icon-1');
  fireEvent.click(editIcon);


  expect(mockUpdateTodo).toHaveBeenCalledWith(1, 'Todo 1');
});
