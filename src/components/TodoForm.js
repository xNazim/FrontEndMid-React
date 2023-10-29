import React, { useState, useRef, useEffect } from 'react';

function TodoForm({ onSubmit, edit }) {
  const [input, setInput] = useState(edit ? edit.text : '');
  const [description, setDescription] = useState(edit ? edit.description : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'text') {
      setInput(value);
    } else if (name === 'description') {
      setDescription(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: edit ? edit.id : Math.floor(Math.random() * 10000),
      text: input,
      description: description,
    });

    setInput('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {/* Todo TextArea */}
      <textarea
        placeholder='Add a todo'
        value={input}
        onChange={handleChange}
        name='text'
        className='todo-textarea'
        ref={inputRef}
      />

      {/* Description TextArea (if needed) */}
      {/* <textarea
        placeholder='Add a description'
        value={description}
        onChange={handleChange}
        name='description'
        className='todo-textarea'
      /> */}

      <button onClick={handleSubmit} className='todo-button'>
        {edit ? 'Update todo' : 'Add todo'}
      </button>
    </form>
  );
}

export default TodoForm;
