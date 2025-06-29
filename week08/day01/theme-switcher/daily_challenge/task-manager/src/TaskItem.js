import React, { useContext, useRef, useState } from 'react';
import { TaskContext } from './TaskContext';

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext);
  const inputRef = useRef();
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    if (editing) {
      dispatch({
        type: 'EDIT_TASK',
        payload: { id: task.id, text: inputRef.current.value },
      });
    }
    setEditing(!editing);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
      />
      {editing ? (
        <input
          type="text"
          defaultValue={task.text}
          ref={inputRef}
        />
      ) : (
        <span
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        >
          {task.text}
        </span>
      )}
      <button onClick={handleEdit}>{editing ? 'Save' : 'Edit'}</button>
      <button onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
