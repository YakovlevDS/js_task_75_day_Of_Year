// ? Task: Find the day of year


// Solution 1

const dayOfYear = (date) =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

console.log(dayOfYear(new Date()))


// ! Explanation: Find which is the day by a given date.
