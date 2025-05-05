
fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
    response.json().then(data => {
        console.log(data)
    })
})

const emailRef = document.querySelector(".email");
console.log(emailRef)