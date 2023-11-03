import React, { useState, useRef, useEffect } from 'react';
import '../App.css';

function TodoForm({ onSubmit, edit }) {
  const [input, setInput] = useState(edit ? edit.text : '');
  const inputRef = useRef(null);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const getRandomBorderColorClass = () => {
    const borderColorClasses = ['red-border', 'blue-border', 'green-border'];
    const randomIndex = Math.floor(Math.random() * borderColorClasses.length);
    return borderColorClasses[randomIndex];
  };

  const handleButtonClick = () => {
    onSubmit({
      id: edit ? edit.id : Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput('');
    setIsButtonPressed(true);
  };

  return (
    <div className='todo-form'>
      <textarea
        placeholder={edit ? 'Update your todo' : 'Add a todo'}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={`todo-textarea ${isButtonPressed ? getRandomBorderColorClass() : ''}`}
        ref={inputRef}
      />
      <button type="button" onClick={handleButtonClick} className='todo-button'>
        {edit ? 'Update todo' : 'Add todo'}
      </button>
    </div>
  );
}

export default TodoForm;