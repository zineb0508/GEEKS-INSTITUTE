const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Simulated database (array of blog posts)
let posts = [
  { id: 1, title: 'My first post', content: 'Hello World!' },
  { id: 2, title: 'Another post', content: 'Express is great!' }
];

// GET /posts - return all blog posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// GET /posts/:id - return a single post by id
app.get('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  res.json(post);
});

// POST /posts - create a new post
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }
  const newPost = {
    id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    title,
    content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT /posts/:id - update an existing post
app.put('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  const { title, content } = req.body;
  if (title) post.title = title;
  if (content) post.content = content;
  res.json(post);
});

// DELETE /posts/:id - delete a post
app.delete('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Post not found' });
  }
  posts.splice(index, 1);
  res.json({ message: 'Post deleted successfully' });
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
