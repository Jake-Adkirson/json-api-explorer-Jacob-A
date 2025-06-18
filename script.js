// so much empty
let result = document.getElementById('postList');
let postForm = document.getElementById('postForm');
let titleInput = document.getElementById('titleInput');
let bodyInput = document.getElementById('bodyInput');
let fetchButton = document.getElementById('fetchButton');

fetch("https://jsonplaceholder.typicode.com/posts").then(function (response) {
    response.json().then(function (data) {
        console.log(data);
        for (let user in data) {
            result.innerHTML += `<h3>${data[user].title}</h3> <p>${data[user].body}</p>`
        }
    })
})

postForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let title = titleInput.value;
    let body = bodyInput.value;
    console.log(`Submitted!\n${title}\n${body}`);

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: new URLSearchParams({
            "title": `${title}`,
            "body": `${body}`
        })
    })
});
fetchButton.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            for (let user in data) {
                result.innerHTML += `<h3>${data[user].title}</h3> <p>${data[user].body}</p>`
            }
        })
    })
})