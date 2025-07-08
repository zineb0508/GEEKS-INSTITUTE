import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'Do React project', completed: false, categoryId: 'a' },
  { id: '2', title: 'Read Redux docs', completed: true, categoryId: 'b' },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, categoryId) {
        return { payload: { id: nanoid(), title, completed: false, categoryId } };
      },
    },
    deleteTask(state, action) {
      return state.filter(task => task.id !== action.payload);
    },
    editTask(state, action) {
      const { id, title } = action.payload;
      const task = state.find(task => task.id === id);
      if (task) task.title = title;
    },
    toggleTaskCompletion(state, action) {
      const task = state.find(task => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
});

export const { addTask, deleteTask, editTask, toggleTaskCompletion } = tasksSlice.actions;
export default tasksSlice.reducer;
