import React from 'react';
import { TaskProvider } from './TaskProvider';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskFilters from './TaskFilters';

function App() {
  return (
    <TaskProvider>
      <h1>Task Manager</h1>
      <TaskForm />
      <TaskFilters />
      <TaskList />
    </TaskProvider>
  );
}

export default App;
