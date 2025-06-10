// public/script.js
let currentAnswer = '';
let score = 0;

const emojiEl = document.getElementById('emoji');
const form = document.getElementById('guess-form');
const feedbackEl = document.getElementById('feedback');
const scoreEl = document.getElementById('score');
const leaderboardEl = document.getElementById('leaderboard');

async function fetchEmoji() {
  const res = await fetch('/api/emoji');
  const data = await res.json();

  currentAnswer = data.correctName;
  emojiEl.textContent = data.emoji;

  form.innerHTML = '';
  data.options.forEach(option => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = option;
    button.onclick = () => submitGuess(option);
    form.appendChild(button);
  });
}

async function submitGuess(guess) {
  const res = await fetch('/api/guess', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ guess, correctName: currentAnswer }),
  });

  const data = await res.json();
  score = data.score;
  scoreEl.textContent = score;

  feedbackEl.textContent = data.isCorrect ? '✅ Correct!' : '❌ Wrong!';
  setTimeout(() => {
    feedbackEl.textContent = '';
    fetchEmoji();
  }, 1000);
}

async function updateLeaderboard() {
  const res = await fetch('/api/leaderboard');
  const data = await res.json();

  leaderboardEl.innerHTML = '';
  data.forEach(entry => {
    const li = document.createElement('li');
    li.textContent = `${entry.name}: ${entry.score}`;
    leaderboardEl.appendChild(li);
  });
}

// Optional: Add name submission when user reaches a high score
window.addEventListener('beforeunload', async () => {
  if (score > 0) {
    const name = prompt('Enter your name for the leaderboard:');
    if (name) {
      await fetch('/api/leaderboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, score }),
      });
    }
  }
});

fetchEmoji();
updateLeaderboard();
