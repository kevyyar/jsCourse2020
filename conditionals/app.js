let password = "hello there";

// check length of passwd

// if (password.length >= 7) {
//   if (password.indexOf(" ") === -1) {
//     console.log("password is valid");
//   } else {
//     console.log("password is long enough but it cannot contain spaces");
//   }
// } else {
//   console.log("password is not valid");
// }

let status = "offline";
// let color;

// if (status === "offline") {
//   color = "red";
// } else {
//   color = "green";
// }

// Ternary operator
let color = status === "offline" ? "red" : "green";
console.log(color);
