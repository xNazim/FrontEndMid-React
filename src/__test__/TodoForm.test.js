import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoForm from '../components/TodoForm';

test('renders TodoForm component', () => {
  const { getByPlaceholderText, getByText } = render(<TodoForm />);
  
  const placeholderText = getByPlaceholderText(/Add a todo/i);
  const addButton = getByText(/Add todo/i);
  expect(placeholderText).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});

test('renders TodoForm component with edit mode', () => {
  const editTodo = { id: 1, text: 'Edit me' };
  const { getByPlaceholderText, getByText } = render(<TodoForm edit={editTodo} />);
  
  const placeholderText = getByPlaceholderText(/Update your todo/i);
  const updateButton = getByText(/Update todo/i);
  expect(placeholderText).toBeInTheDocument();
  expect(updateButton).toBeInTheDocument();
});

test('calls onSubmit function with correct input when Add todo button is clicked', () => {
  const onSubmitMock = jest.fn();
  const { getByText, getByPlaceholderText } = render(<TodoForm onSubmit={onSubmitMock} />);
  

  const textarea = getByPlaceholderText(/Add a todo/i);
  fireEvent.change(textarea, { target: { value: 'New todo item' } });

  const addButton = getByText(/Add todo/i);
  fireEvent.click(addButton);

  expect(onSubmitMock).toHaveBeenCalledWith({ id: expect.any(Number), text: 'New todo item' });
});

test('calls onSubmit function with correct input when Update todo button is clicked', () => {
  const onSubmitMock = jest.fn();
  const editTodo = { id: 1, text: 'Edit me' };
  const { getByText, getByPlaceholderText } = render(<TodoForm onSubmit={onSubmitMock} edit={editTodo} />);
  
  const textarea = getByPlaceholderText(/Update your todo/i);
  fireEvent.change(textarea, { target: { value: 'Updated todo item' } });

  const updateButton = getByText(/Update todo/i);
  fireEvent.click(updateButton);


  expect(onSubmitMock).toHaveBeenCalledWith({ id: 1, text: 'Updated todo item' });
});
