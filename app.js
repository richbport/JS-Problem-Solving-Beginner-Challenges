const emailRef = document.querySelector(".email");

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     emailRef.innerHTML = data.username;
//   });

async function main() {
  await fetch("https://jsonplaceholder.typicode.com/users/1")
}

main()
