import React, { useState, useContext } from 'react';
import { TaskContext } from './TaskContext';

const TaskForm = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    dispatch({ type: 'ADD_TASK', payload: text });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="New task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
