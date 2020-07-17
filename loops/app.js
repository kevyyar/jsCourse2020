// for (let i = 0; i < 20; i++) {
//   console.log(`the number is ${i}`);
// }

// // multiply by itself
// for (let i = 0; i <= 20; i++) {
//   console.log(`${i}x${i} = ${i * i}`);
// }

// const examScores = [98, 77, 88, 99, 76, 94, 67];
// for (let i = 0; i < examScores.length; i++) {
//   console.log(examScores[i]);
// }

// const myStudents = [
//   {
//     firstName: "Zeus",
//     grade: 88,
//   },
//   {
//     firstName: "Apollo",
//     grade: 77,
//   },
//   {
//     firstName: "Athena",
//     grade: 97,
//   },
// ];
// loop through and object
// for (let i = 0; i < myStudents.length; i++) {
//   let student = myStudents[i];
//   console.log(
//     `The student name is ${student.firstName} and their score is ${student.grade}`
//   );
// }

// Average grade scores
// let total = 0;
// for (let i = 0; i < myStudents.length; i++) {
// let students = myStudents[i];
// total += students.grade;
// }

// console.log(total / myStudents.length);

// looping through nested arrays
// const gameBoard = [
//   [4, 32, 8, 4],
//   [12, 4, 8, 10],
//   [12, 4, 6, 8],
//   [14, 16, 10],
// ];

// let total = 0;
// for (let i = 0; i < gameBoard.length; i++) {
//   let row = gameBoard[i];
//   for (let j = 0; j < row.length; j++) {
//     total += row[j];
//   }
// }

// ////////////// While Loops

//generate random number guessing
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
  guess = Math.floor(Math.random() * 10);
  console.log(`Target ${target} - Guess ${guess}`);
}
