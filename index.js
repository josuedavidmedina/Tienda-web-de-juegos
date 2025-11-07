document.addEventListener('DOMContentLoaded', () => {
    const userComment = document.getElementById("userComment");
    const submitBtn = document.getElementById("submitBtn");
    const feedback = document.getElementById("feedback");
    const commentList = document.getElementById("commentList");

  
    feedback.style.display = 'none';
    submitBtn.addEventListener('click', () => {
        const commentText = userComment.value.trim();

       


        feedback.style.display = 'none';
        feedback.textContent = '';
        feedback.classList.remove('success');
        userComment.classList.remove('error');


        if (commentText === '') {
            feedback.textContent = "Por favor, escribe un comentario";

            feedback.style.display = 'block';

            userComment.classList.add('error');

        } else if (commentText.length > 300) {
            feedback.textContent = "El comentario no puede superar los 300 caracteres";
            feedback.style.display = 'block';
            userComment.classList.add('error');
        } else {
         
            const newComment = document.createElement('div');
            newComment.classList.add('comment');

            const commentContent = document.createElement('p');
            commentContent.textContent = commentText;
            newComment.appendChild(commentContent);
            commentList.insertBefore(newComment, commentList.firstChild);


            userComment.value = '';

            feedback.textContent = "Comentario agregado";
            feedback.classList.add('success');
            feedback.style.display = 'block';

            feedback.textContent = 

            
            setTimeout(() => {
                feedback.style.display = 'none';
                feedback.classList.remove('success');
            }, 2000);
        }
    });

    userComment.addEventListener('input', () => {
        if (userComment.value.trim() !== '' && userComment.value.length <= 300) {
            userComment.classList.remove('error');
            if(feedback.textContent !== "Comentario agregado"){
               feedback.style.display = 'none';
            }
        }
    });
});