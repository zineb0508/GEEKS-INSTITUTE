import React, { useState } from 'react';
import DatePicker from './components/DatePicker';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div>
      <h1>Daily Planner</h1>
      <DatePicker />
      <TaskForm editingTask={editingTask} onFinish={() => setEditingTask(null)} />
      <TaskList onEdit={setEditingTask} />
    </div>
  );
}

export default App;

