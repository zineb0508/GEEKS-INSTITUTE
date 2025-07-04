import { setTodos } from './todoSlice';

export const fetchTodos = () => async (dispatch) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const data = await res.json();
    dispatch(setTodos(data));
  } catch (error) {
    console.error('Failed to fetch todos:', error);
  }
};
