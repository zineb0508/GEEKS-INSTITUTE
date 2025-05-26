const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "orange", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "brown", moons: 79 },
    { name: "Saturn", color: "goldenrod", moons: 83 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "darkblue", moons: 14 }
];

const section = document.querySelector('.listPlanets');

planets.forEach(planet => {
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('planet');
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;

    for (let i = 0; i < planet.moons; i++) {
        const moon = document.createElement('div');
        moon.classList.add('moon');
        const angle = (i / planet.moons) * 2 * Math.PI;  // distribute moons in a circle
        const orbitRadius = 60;  // how far moons are from the planet
        moon.style.left = `${50 + orbitRadius * Math.cos(angle)}px`;
        moon.style.top = `${50 + orbitRadius * Math.sin(angle)}px`;

        planetDiv.appendChild(moon);
    }

    section.appendChild(planetDiv);
});
