const form = document.getElementById('gifForm');
const input = document.getElementById('categoryInput');
const container = document.getElementById('gifContainer');
const deleteAll = document.getElementById('deleteAll');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const category = input.value;
  const url = `https://api.giphy.com/v1/gifs/random?tag=${category}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const img = document.createElement('img');
    img.src = data.data.images.fixed_height.url;

    const div = document.createElement('div');
    const btn = document.createElement('button');
    btn.textContent = 'Delete';
    btn.onclick = () => div.remove();

    div.appendChild(img);
    div.appendChild(btn);
    container.appendChild(div);
  } catch (err) {
    console.error(err);
  }

  input.value = '';
});

deleteAll.onclick = () => container.innerHTML = '';
