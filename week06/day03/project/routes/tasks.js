const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

const TASKS_FILE = path.join(__dirname, '..', 'tasks.json');

// Helper to read tasks file
async function readTasks() {
  const data = await fs.readFile(TASKS_FILE, 'utf-8');
  return JSON.parse(data);
}

// Helper to write tasks file
async function writeTasks(tasks) {
  await fs.writeFile(TASKS_FILE, JSON.stringify(tasks, null, 2));
}

// GET /tasks - get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await readTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read tasks' });
  }
});

// GET /tasks/:id - get task by id
router.get('/:id', async (req, res) => {
  try {
    const tasks = await readTasks();
    const task = tasks.find(t => t.id === Number(req.params.id));
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read tasks' });
  }
});

// POST /tasks - create new task
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }

    const tasks = await readTasks();
    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      title,
      description
    };
    tasks.push(newTask);
    await writeTasks(tasks);

    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save task' });
  }
});

// PUT /tasks/:id - update task by id
router.put('/:id', async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }

    const tasks = await readTasks();
    const index = tasks.findIndex(t => t.id === Number(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Task not found' });

    tasks[index] = { id: tasks[index].id, title, description };
    await writeTasks(tasks);

    res.json(tasks[index]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

// DELETE /tasks/:id - delete task by id
router.delete('/:id', async (req, res) => {
  try {
    const tasks = await readTasks();
    const index = tasks.findIndex(t => t.id === Number(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Task not found' });

    const deletedTask = tasks.splice(index, 1);
    await writeTasks(tasks);

    res.json({ message: 'Task deleted', task: deletedTask[0] });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

module.exports = router;





