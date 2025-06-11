const express = require('express');
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" }
];

// GET /quiz - Start or continue quiz
router.get('/', (req, res) => {
  if (!req.session.score) {
    req.session.score = 0;
    req.session.currentQuestion = 0;
  }

  const index = req.session.currentQuestion;

  if (index < triviaQuestions.length) {
    const question = triviaQuestions[index].question;
    res.send(`
      <h2>Question ${index + 1}: ${question}</h2>
      <form method="POST" action="/quiz">
        <input type="text" name="answer" required />
        <button type="submit">Submit</button>
      </form>
    `);
  } else {
    res.redirect('/quiz/score');
  }
});

// POST /quiz - Submit answer
router.post('/', (req, res) => {
  const index = req.session.currentQuestion;
  const userAnswer = req.body.answer.trim().toLowerCase();
  const correctAnswer = triviaQuestions[index].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    req.session.score++;
    req.session.feedback = "✅ Correct!";
  } else {
    req.session.feedback = `❌ Incorrect! The correct answer was: ${triviaQuestions[index].answer}`;
  }

  req.session.currentQuestion++;
  res.redirect('/quiz/next');
});

// GET /quiz/next - Show feedback and next question
router.get('/next', (req, res) => {
  const feedback = req.session.feedback || '';
  res.send(`
    <p>${feedback}</p>
    <a href="/quiz">Next Question</a>
  `);
});

// GET /quiz/score - Final score
router.get('/score', (req, res) => {
  const score = req.session.score || 0;
  req.session.destroy();
  res.send(`
    <h2>Quiz Finished!</h2>
    <p>Your final score: ${score} / ${triviaQuestions.length}</p>
    <a href="/quiz">Play Again</a>
  `);
});

module.exports = router;
