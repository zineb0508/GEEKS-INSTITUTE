import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { state } = useContext(TaskContext);

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === 'COMPLETED') return task.completed;
    if (state.filter === 'ACTIVE') return !task.completed;
    return true;
  });

  return (
    <ul>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
