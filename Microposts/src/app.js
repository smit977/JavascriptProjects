import { http } from './http';
import { ui } from './ui';

// Get post on dom load
document.addEventListener('DOMContentLoaded' , getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click' , submitPost);

// Listen for delete post
document.querySelector('#posts').addEventListener('click' ,deletePost);

// Listen for edit state
document.querySelector('#posts').addEventListener('click' ,enableEdit);


// Get posts
function getPosts() {
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        .catch(err => console.log(err));
}

function submitPost() {
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;

    const data = {
        title,
        body
    }

    // Create post
    http.post('http://localhost:3000/posts' ,data)
        .then(() => {
            ui.showAlert('Post Added' ,'alert alert-success');
            ui.clearFields();
            getPosts();
        })
        .catch(err => console.log(err));
}

function deletePost(e) {
    // BY ADITYA

    // if(e.target.classList.contains('fa-remove')) {
    //     ui.removeElement(e);
    //     let id = e.target.parentElement.getAttribute('data-id');
    //     id = parseInt(id);
    //     http.delete(`http://localhost:3000/posts/${id}`)
    //         .then(data => console.log(data))
    //         .catch(err => console.log(err));
    // }

    // BY BRAD
    if(e.target.parentElement.classList.contains('delete')) {
        const id = e.target.parentElement.dataset.id;
        if(confirm('Are you sure?')) {
            http.delete(`http://localhost:3000/posts/${id}`)
            .then(data => {
                ui.showAlert('Post removed' ,'alert alert-success')
                getPosts();
            })
            .catch(err => console.log(err));
        }
    }
    e.preventDefault();
}

function enableEdit(e) {
    if(e.target.parentElement.classList.contains('edit')) {
        const id = e.target.parentElement.dataset.id;
        const body = e.target.parentElement.previousElementSibling.textContent;
        const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;

        const data = {
            id,
            title,
            body
        }
    }
    e.preventDefault();
}