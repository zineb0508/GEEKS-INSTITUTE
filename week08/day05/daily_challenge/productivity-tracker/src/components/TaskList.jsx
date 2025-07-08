import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasksByCategory } from '../features/tasks/selectors';
import { toggleTaskCompletion, deleteTask, editTask } from '../features/tasks/tasksSlice';

const TaskList = ({ selectedCategoryId }) => {
  const tasks = useSelector(selectTasksByCategory(selectedCategoryId));
  const dispatch = useDispatch();

  const handleToggle = useCallback((id) => {
    dispatch(toggleTaskCompletion(id));
  }, [dispatch]);

  const handleDelete = useCallback((id) => {
    dispatch(deleteTask(id));
  }, [dispatch]);

  const handleEdit = useCallback((id) => {
    const newTitle = prompt("Edit task:");
    if (newTitle) {
      dispatch(editTask({ id, title: newTitle }));
    }
  }, [dispatch]);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggle(task.id)}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </span>
          <button onClick={() => handleEdit(task.id)}>✏️</button>
          <button onClick={() => handleDelete(task.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
