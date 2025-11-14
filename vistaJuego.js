document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const gameTitle = urlParams.get('title');
    const gameImage = urlParams.get('image');
    const gameDescription = urlParams.get('description');

    document.getElementById('game-title').textContent = gameTitle;
    document.getElementById('game-image').src = gameImage;
    document.getElementById('game-description').textContent = gameDescription || 'No hay descripción disponible.';

    // Dummy data for related games
    const relatedGames = [
        { title: 'Planet Crafter PC', image: './images/The-planet.png', description: 'Un juego de supervivencia espacial, mundo abierto y terraformación. Transforma un planeta hostil en un paraíso habitable para los humanos, gestionando oxígeno, calor y presión atmosférica mientras construyes tu base y exploras en busca de recursos.' },
        { title: 'Borderlands', image: './images/borderLands.png', description: 'Un shooter en primera persona con elementos de rol y un estilo artístico cel-shaded. Explora el planeta Pandora como un cazador de bóvedas en busca de tecnología alienígena, enfrentándote a bandidos y fauna local mientras recoges millones de armas generadas proceduralmente.' },
        { title: 'The last of us', image: './images/lastOfsUs.png', description: 'Una aventura de acción en un Estados Unidos post-apocalíptico. Controlas a Joel, un contrabandista que escolta a Ellie, una adolescente inmune a la infección que ha devastado a la humanidad, en un viaje brutal por la supervivencia y la esperanza.' },
        { title: 'Cloverpit', image: './images/cloverPit.png', description: 'Un roguelite de terror con una estética retro de PS1. Atrapado en una celda, debes usar una máquina tragaperras para pagar una deuda a tu captor. Gestiona amuletos y power-ups para sobrevivir en este juego que explora la adicción y la desesperación.' },
    ];

    const relatedGamesContainer = document.querySelector('.related-games .games');
    relatedGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');
        gameCard.innerHTML = `
            <img src="${game.image}" alt="Juego" />
            <p>${game.title}</p>
        `;
        gameCard.addEventListener('click', () => {
            window.location.href = `vistaJuego.html?title=${encodeURIComponent(game.title)}&image=${encodeURIComponent(game.image)}&description=${encodeURIComponent(game.description)}`;
        });
        relatedGamesContainer.appendChild(gameCard);
    });

    const hamburger = document.querySelector(".hamburger");
    const aside = document.querySelector("aside");

    hamburger.addEventListener("click", () => {
        aside.classList.toggle("open");
    });

    const inicioBtn = document.getElementById("inicio-btn");
    if (inicioBtn) {
        inicioBtn.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    document.addEventListener("click", (event) => {
        if (!aside.contains(event.target) && !hamburger.contains(event.target)) {
            aside.classList.remove("open");
        }
    });
});
