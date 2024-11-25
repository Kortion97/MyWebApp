
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene il comportamento predefinito del form

    // Ottieni i valori del form
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;

    if (title && content) {
        // Crea un nuovo post
        let post = document.createElement('div');
        post.classList.add('post');
        
        let postTitle = document.createElement('h4');
        postTitle.textContent = title;
        
        let postContent = document.createElement('p');
        postContent.textContent = content;
        
        post.appendChild(postTitle);
        post.appendChild(postContent);

        // Aggiungi il nuovo post alla lista dei post
        document.getElementById('postList').appendChild(post);

        // Pulisci il form
        document.getElementById('postForm').reset();
    } else {
        alert('Per favore, compila tutti i campi.');
    }
});
