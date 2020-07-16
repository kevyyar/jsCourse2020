const fitbitData = {
  totalSteps: 8300,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: 4,
  avgGoodSleep: "2:13",
};

// console.log(fitbitData.totalSteps);

let miles = "totalMiles";
// console.log(fitbitData[miles]);

/// Updating & Adding Properties
const userReviews = {};

userReviews.kevyyar = 9;
userReviews.becky = 7.4;
// console.log(userReviews);

/// Nested Objects & Arrays

const student = {
  firstName: "David",
  lastName: "Robinson",
  strengths: ["Music", "Art", "Math"],
  examScores: {
    midterm: 94,
    final: 89,
  },
};

const avgScore = (student.examScores.midterm + student.examScores.final) / 2;
console.log(avgScore);

//Array & Object Equality
let nums = [1, 2, 3, 4];
let mystery = [1, 2, 3, 4];
console.log(nums === mystery);
