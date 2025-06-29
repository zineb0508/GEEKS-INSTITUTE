import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';

const TaskFilters = () => {
  const { dispatch, state } = useContext(TaskContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'FILTER_TASKS', payload: 'ALL' })}>
        All
      </button>
      <button onClick={() => dispatch({ type: 'FILTER_TASKS', payload: 'ACTIVE' })}>
        Active
      </button>
      <button onClick={() => dispatch({ type: 'FILTER_TASKS', payload: 'COMPLETED' })}>
        Completed
      </button>
      <p>Current filter: {state.filter}</p>
    </div>
  );
};

export default TaskFilters;
