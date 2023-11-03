import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('renders TodoList component with initial state', () => {
  const { getByText, getByAltText } = render(<TodoList />);
  

  const titleElement = getByText(/What's the Plan for Today?/i);
  const logoElement = getByAltText('logo');
  const secondLogoElement = getByAltText('second logo');
  expect(titleElement).toBeInTheDocument();
  expect(logoElement).toBeInTheDocument();
  expect(secondLogoElement).toBeInTheDocument();
});

test('adds a new todo when form is submitted', () => {
  const { getByPlaceholderText, getByText } = render(<TodoList />);
  
  const textarea = getByPlaceholderText(/Add a todo/i);
  fireEvent.change(textarea, { target: { value: 'New todo item' } });

  const addButton = getByText(/Add todo/i);
  fireEvent.click(addButton);

  const addedTodo = getByText(/New todo item/i);
  expect(addedTodo).toBeInTheDocument();
});

test('updates a todo when edit is submitted', () => {
  const { getByPlaceholderText, getByText } = render(<TodoList />);
  
  const textarea = getByPlaceholderText(/Add a todo/i);
  fireEvent.change(textarea, { target: { value: 'New todo item' } });
  const addButton = getByText(/Add todo/i);
  fireEvent.click(addButton);

  const editButton = getByText(/Edit/i);
  fireEvent.click(editButton);

  const editTextarea = getByPlaceholderText(/Update your todo/i);
  fireEvent.change(editTextarea, { target: { value: 'Updated todo item' } });
  const updateButton = getByText(/Update todo/i);
  fireEvent.click(updateButton);

  const updatedTodo = getByText(/Updated todo item/i);
  expect(updatedTodo).toBeInTheDocument();
});

test('deletes a todo when delete button is clicked', () => {
  const { getByPlaceholderText, getByText, queryByText } = render(<TodoList />);
  
  const textarea = getByPlaceholderText(/Add a todo/i);
  fireEvent.change(textarea, { target: { value: 'New todo item' } });
  const addButton = getByText(/Add todo/i);
  fireEvent.click(addButton);

  const deleteButton = getByText(/Delete/i);
  fireEvent.click(deleteButton);

  const deletedTodo = queryByText(/New todo item/i);
  expect(deletedTodo).toBeNull();
});
