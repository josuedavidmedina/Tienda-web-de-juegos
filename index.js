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

  const gameContainers = document.querySelectorAll(".game-container");

  const noGamesMessage = document.getElementById("no-games-message");

  gameContainers.forEach(container => {
    container.addEventListener('click', () => {
        const gameTitle = container.dataset.title;
        const gameImage = container.dataset.image;
        const gameDescription = container.dataset.description;
        window.location.href = `vistaJuego.html?title=${encodeURIComponent(gameTitle)}&image=${encodeURIComponent(gameImage)}&description=${encodeURIComponent(gameDescription)}`;
    });
  });

  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();

    let gamesFound = false;

    gameContainers.forEach((container) => {
      const gameTitle = container.dataset.title.toLowerCase();

      if (gameTitle.includes(searchTerm)) {
        container.style.display = "block";
        gamesFound = true;
  
    } else {
        container.style.display = "none";
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
