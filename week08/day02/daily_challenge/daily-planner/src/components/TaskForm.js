import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../plannerSlice';

export default function TaskForm({ editingTask, onFinish }) {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.planner.selectedDate);

  useEffect(() => {
    setText(editingTask ? editingTask.text : '');
  }, [editingTask]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;

    if (editingTask) {
      dispatch(editTask({ date: selectedDate, taskId: editingTask.id, updatedText: text }));
    } else {
      dispatch(addTask({ date: selectedDate, task: { text } }));
    }

    setText('');
    onFinish();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit">{editingTask ? 'Update' : 'Add'} Task</button>
    </form>
  );
}
