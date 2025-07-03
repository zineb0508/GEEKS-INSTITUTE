import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todo/todoSlice';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li>
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        style={{
          cursor: 'pointer',
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch(removeTodo(todo.id))} style={{ marginLeft: '10px' }}>
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
