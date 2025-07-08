import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import TaskList from './components/TaskList';
import CategorySelector from './components/CategorySelector';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <Provider store={store}>
      <h1>📝 Productivity Tracker</h1>
      <CategorySelector selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
      <TaskList selectedCategoryId={selectedCategory} />
    </Provider>
  );
};

export default App;

