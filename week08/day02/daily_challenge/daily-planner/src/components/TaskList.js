import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../plannerSlice';

export default function TaskList({ onEdit }) {
  const { selectedDate, tasksByDate } = useSelector(state => state.planner);
  const dispatch = useDispatch();
  const tasks = tasksByDate[selectedDate] || [];

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => onEdit(task)}>Edit</button>
          <button onClick={() => dispatch(deleteTask({ date: selectedDate, taskId: task.id }))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
