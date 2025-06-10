// server.js
const express = require('express');
const path = require('path');
const { emojis, leaderboard } = require('./data');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let score = 0;

app.get('/api/emoji', (req, res) => {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];
  const options = [correct.name];

  // Pick 3 wrong answers
  while (options.length < 4) {
    const random = emojis[Math.floor(Math.random() * emojis.length)];
    if (!options.includes(random.name)) {
      options.push(random.name);
    }
  }

  // Shuffle options
  options.sort(() => Math.random() - 0.5);

  res.json({
    emoji: correct.emoji,
    correctName: correct.name, // this can be omitted in production to avoid cheating
    options,
  });
});

app.post('/api/guess', (req, res) => {
  const { guess, correctName } = req.body;
  const isCorrect = guess === correctName;

  if (isCorrect) score++;
  else score = 0;

  res.json({
    isCorrect,
    score,
  });
});

app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard.slice(0, 5));
});

app.post('/api/leaderboard', (req, res) => {
  const { name, score } = req.body;
  leaderboard.push({ name, score });
  leaderboard.sort((a, b) => b.score - a.score);
  res.status(201).json({ message: 'Score submitted' });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
