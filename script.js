const postIdInput = document.getElementById('postId');
const searchButton = document.getElementById('searchButton');
const postContainer = document.getElementById('postContainer');
const commentsButton = document.getElementById('commentsButton');
const commentsContainer = document.getElementById('commentsContainer');

// отримання поста з інпуту
function getPostById(postId) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => {
                if(!response.ok) {
                    throw new Error(`HTTP error. ${response.status}`);
                }
                return response.json();
            })
            .then(post => resolve(post))
            .catch(error => reject(error));
    });
}

// коментарі до поств

function getCommentsByPostId(postId) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => {
            if(!response.ok) {
                throw new Error(`HTTP error. ${response.status}`);
            }
            return response.json();
        })
        .then(comments => resolve(comments))
        .catch(error => reject(error));
    });
}


// кнопка для пошуку поста
searchButton.addEventListener('click', () => {
    const postId = postIdInput.value;
    if (postId !== '') {
        getPostById(postId)
            .then(post => {
                postContainer.style.display = 'block';
                postContainer.innerHTML = `<h3>Пост:</h3>
                                           <p>ID: ${post.id}</p>
                                           <p>Title: ${post.title}</p>
                                           <p>Body: ${post.body}</p>`;
                commentsButton.style.display = 'block';
            })
            .catch(error => console.error(error));
    }
});

// кнопка шовер коментарів
commentsButton.addEventListener('click', () => {
    const postId = postIdInput.value;
    if (postId !== '') {
        getCommentsByPostId(postId)
            .then(comments => {
                commentsContainer.style.display = 'block';
                commentsContainer.innerHTML = '<h3>Коментарі до цього посту</h3>';
                comments.forEach(comment => {
                    commentsContainer.innerHTML += `<p>ID: ${comment.id}</p>
                                                    <p>Name: ${comment.name}</p>
                                                    <p>Email: ${comment.email}</p>
                                                    <p>Body: ${comment.body}</p>`;
                    
                });
            })
            .catch(error => console.error(error));
    }
});
