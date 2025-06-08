/*// Giphy API URL
const giphyURL = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

// Function to fetch Giphy data
function fetchGifs() {
  fetch(giphyURL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); // Parse JSON if response is OK
    })
    .then(data => {
      console.log('Giphy API Data:', data); // Log the full object
    })
    .catch(error => {
      console.error('Fetch error:', error); // Log any errors
    });
}

// Call the function
fetchGifs();*/
//exercice02:


const url = 'https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

fetch(url)
  .then(res => {
    if (!res.ok) throw new Error(res.status);
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error('Error:', err));
//exercie03:
async function getStarship() {
  try {
    const res = await fetch("https://www.swapi.tech/api/starships/9/");
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    console.log(data.result);
  } catch (err) {
    console.error("Error:", err);
  }
}

getStarship();
//exercice04:
/*calling
(resolves after 2 seconds...)
resolved*/


