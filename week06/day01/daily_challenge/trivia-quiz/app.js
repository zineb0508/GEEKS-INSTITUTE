console.log("🧠 Trivia Quiz App is running...");

const express = require('express');
const session = require('express-session');
const quizRouter = require('./routes/quiz');

const app = express();
const PORT = 4000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: 'quiz_secret_key',
  resave: false,
  saveUninitialized: true
}));

app.use('/quiz', quizRouter);

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Trivia Quiz Game!</h1><a href="/quiz">Start Quiz</a>');
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
