const quotes = [
  { id: 0, author: "Mahmoud Darwish", quote: "I am not a lover of Palestine. I am part of its body." },
  { id: 1, author: "Mahmoud Darwish", quote: "The Palestinians are not seeking to annihilate Israel. We are seeking to gain our freedom." },
  { id: 2, author: "Mahmoud Darwish", quote: "I come from there and I have memories." },
  { id: 3, author: "Mahmoud Darwish", quote: "Palestine is not a dream. It is the awakening from the nightmare." },
  { id: 4, author: "Mahmoud Darwish", quote: "The identity of the Palestinian is that of a person without a land." },
  { id: 5, author: "Mahmoud Darwish", quote: "My homeland is not a suitcase, and I am no traveler." },
  { id: 6, author: "Mahmoud Darwish", quote: "We do injustice to Palestine when we say that Palestine is the cause of the Palestinians. It is the cause of every free human being." }
];

let lastId = -1;

function generateQuote() {

  let idx = Math.floor(Math.random() * quotes.length);
while (idx === lastId) {
  idx = Math.floor(Math.random() * quotes.length);
}
  lastId = idx;
  const q = quotes[idx];
  document.getElementById("quoteBox").innerText = `"${q.quote}"\n— ${q.author}`;
}
