document.addEventListener("DOMContentLoaded", () => {
  const userComment = document.getElementById("userComment");
  const submitBtn = document.getElementById("submitBtn");
  const feedback = document.getElementById("feedback");
  const commentList = document.getElementById("commentList");



  feedback.style.display = "none";


  submitBtn.addEventListener("click", () => {
    const commentText = userComment.value.trim();

    feedback.style.display = "none";
    feedback.textContent = "";
    feedback.classList.remove("success");
    userComment.classList.remove("error");



    if (commentText === "") {
      feedback.textContent = "Por favor, escribe un comentario";
      feedback.style.display = "block";
      userComment.classList.add("error");

    } else if (commentText.length > 300) {
        feedback.textContent =  "El comentario no puede superar los 300 caracteres";
        feedback.style.display = "block";
        userComment.classList.add("error");

    } else {
      const newComment = document.createElement("div");
      newComment.classList.add("comment");

      const commentContent = document.createElement("p");
      commentContent.textContent = commentText;
      newComment.appendChild(commentContent);
      commentList.insertBefore(newComment, commentList.firstChild);
      userComment.value = "";
      feedback.textContent = "Comentario agregado";
      feedback.classList.add("success");
      feedback.style.display = "block";

      feedback.textContent = setTimeout(() => {
        feedback.style.display = "none";
        feedback.classList.remove("success");
      }, 2000);
    }
  });

  userComment.addEventListener("input", () => {

    if (userComment.value.trim() !== "" && userComment.value.length <= 300) {
      userComment.classList.remove("error");

      if (feedback.textContent !== "Comentario agregado") {
        feedback.style.display = "none";
      }
    }
  });

  const searchInput = document.querySelector(".search input");

  const gameCards = document.querySelectorAll(".game-card");

  const noGamesMessage = document.getElementById("no-games-message");

  gameCards.forEach(card => {
    card.addEventListener('click', () => {
        const gameTitle = card.querySelector('p').textContent;
        const gameImage = card.querySelector('img').src;
        const gameDescription = "Esta es una descripción de ejemplo para el juego. Aquí se mostrarán más detalles sobre la jugabilidad, la historia y las características del juego.";
        window.location.href = `vistaJuego.html?title=${encodeURIComponent(gameTitle)}&image=${encodeURIComponent(gameImage)}&description=${encodeURIComponent(gameDescription)}`;
    });
  });

  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();

    let gamesFound = false;

    gameCards.forEach((card) => {
      const gameTitle = card.querySelector("p").textContent.toLowerCase();

      if (gameTitle.includes(searchTerm)) {
        card.style.display = "block";
        gamesFound = true;
  
    } else {
        card.style.display = "none";
      }
    });

    if (gamesFound) {
      noGamesMessage.style.display = "none";
    } else {
      noGamesMessage.style.display = "block";
    }
  });

  const hamburger = document.querySelector(".hamburger");

  const aside = document.querySelector("aside");

  hamburger.addEventListener("click", () => {
    aside.classList.toggle("open");
  });
});
