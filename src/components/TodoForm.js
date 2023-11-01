import React, { useState, useRef, useEffect } from 'react';

function TodoForm({ onSubmit, edit }) {
  const [input, setInput] = useState(edit ? edit.text : '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: edit ? edit.id : Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <textarea
        placeholder={edit ? 'Update your todo' : 'Add a todo'}
        value={input}
        onChange={handleChange}
        className='todo-textarea'
        ref={inputRef}
      />
      <button type="submit" className='todo-button'>
        {edit ? 'Update todo' : 'Add todo'}
      </button>
    </form>
  );
}

export default TodoForm;
