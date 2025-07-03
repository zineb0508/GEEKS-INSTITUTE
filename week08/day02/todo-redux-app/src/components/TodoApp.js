import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../redux/todoActions';

const TodoApp = ({ todos, addTodo, toggleTodo, removeTodo }) => {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>📝 Todo List</h2>
      <input
        type="text"
        placeholder="Enter a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <button onClick={handleAdd} style={{ padding: '8px 12px' }}>Add</button>

      <ul style={{ marginTop: '20px' }}>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              marginBottom: '10px',
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? 'gray' : 'black',
            }}
          >
            {todo.text}
            <button
              onClick={() => toggleTodo(todo.id)}
              style={{ marginLeft: '10px' }}
            >
              ✅
            </button>
            <button
              onClick={() => removeTodo(todo.id)}
              style={{ marginLeft: '5px' }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Connect state and dispatchers
const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  removeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
