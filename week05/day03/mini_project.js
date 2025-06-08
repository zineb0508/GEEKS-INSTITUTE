const infoBox = document.getElementById("infoBox");
const button = document.getElementById("findBtn");

button.onclick = async function () {
  infoBox.innerHTML = "Loading...";

  try {
    const randomId = Math.floor(Math.random() * 83) + 1;
    const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
    const data = await response.json();
    const person = data.result.properties;

    const home = await fetch(person.homeworld);
    const homeData = await home.json();

    infoBox.innerHTML = `
      <h3>${person.name}</h3>
      <p>Height: ${person.height}</p>
      <p>Gender: ${person.gender}</p>
      <p>Birth Year: ${person.birth_year}</p>
      <p>Home World: ${homeData.result.properties.name}</p>
    `;
  } catch (error) {
    infoBox.innerHTML = "Error loading data.";
  }
};
