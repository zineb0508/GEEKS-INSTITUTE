import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todo/todoSlice';
import { fetchTodos } from '../features/todo/todoThunks';

function TodoList() {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
          >
            {todo.title}
          </span>
          <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

