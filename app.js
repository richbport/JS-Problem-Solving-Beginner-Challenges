function calcTriangleArea(base, height) {
  return (1 / 2) * base * height;
}

console.log(calcTriangleArea(20, 20));

let bool = !true;
console.log(bool);

let subscribed = false;
let loggedIn = true;

if (subscribed === true) {
  console.log("show the video");
} else if (loggedIn === true) {
  console.log("tell the user to upgrade their subscription");
}
