import { createSlice } from '@reduxjs/toolkit';

const plannerSlice = createSlice({
  name: 'planner',
  initialState: {
    tasksByDate: {},
    selectedDate: new Date().toISOString().split('T')[0],
  },
  reducers: {
    selectDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    addTask: (state, action) => {
      const { date, task } = action.payload;
      if (!state.tasksByDate[date]) {
        state.tasksByDate[date] = [];
      }
      state.tasksByDate[date].push({ ...task, id: Date.now() });
    },
    editTask: (state, action) => {
      const { date, taskId, updatedText } = action.payload;
      const tasks = state.tasksByDate[date];
      if (tasks) {
        const task = tasks.find(t => t.id === taskId);
        if (task) task.text = updatedText;
      }
    },
    deleteTask: (state, action) => {
      const { date, taskId } = action.payload;
      state.tasksByDate[date] = state.tasksByDate[date].filter(task => task.id !== taskId);
    },
  },
});

export const { selectDate, addTask, editTask, deleteTask } = plannerSlice.actions;
export default plannerSlice.reducer;