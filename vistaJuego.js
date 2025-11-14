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
        { title: 'Planet Crafter PC', image: './images/The-planet.png', description: 'Un juego de creación de planetas.' },
        { title: 'Borderlands', image: './images/borderLands.png', description: 'Un looter shooter con un estilo artístico único.' },
        { title: 'The last of us', image: './images/lastOfsUs.png', description: 'Una aventura post-apocalíptica.' },
        { title: 'Cloverpit', image: './images/cloverPit.png', description: 'Descripción de Cloverpit.' },
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
});
