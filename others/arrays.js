// let grades = [10, 9, 10, 8];
// let acum = 0;
// let totalElements = grades.length;

// for (var i = 0; i < totalElements; i++) {
//   acum += grades[i];
// }

// console.log(acum / totalElements);

//////////////////////

let grades = [10, 9, 10, 8];
console.log(grades.reduce((cu, ac) => ac + cu, 0) / grades.length);
