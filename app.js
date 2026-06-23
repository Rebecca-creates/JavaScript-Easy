/* Q1: Create a function that takes two numbers as arguments and returns their sum. */

function addition(num1, num2) {
  return num1 + num2;
}
console.log(addition(3, 5));

/* Q2: Create a function that takes the number of hours as an argument and returns the number of seconds. */

function hoursIntoSeconds(hour) {
  return (seconds = hour * 3600);
}
console.log(hoursIntoSeconds(2));

/* Q3: Create a function that takes the length and width of a rectangle as arguments and returns its area. */
function calcPerimeter(length, width) {
  return 2 * (length + width);
}
console.log(calcPerimeter(10, 20));

/* Q4: Create a function that takes the base and height of a triangle and return its area */
function calcTriangleArea(base, height) {
  return (area = 0.5 * (base * height));
}

console.log(calcTriangleArea(3, 2));

/* Q5: Create a function that accepts a string and adds "Frontend" on to the end of it. */
function appendFrontend(str) {
  return str + "Frontend";
}
console.log(appendFrontend("Apple"));

/* Q5: Given two numbers, return true if the sum of both umbers is greater than 100. Otherwise, return false. */
function sumGreaterThan100(num1, num2) {
  return num1 + num2 > 100;
}
console.log(sumGreaterThan100(20, 10));
console.log(sumGreaterThan100(50, 60));

/* Q7: Create a function that accepts a number and returns true if it is less than or equal to zero, otherwise returns false. */
function lessThanOrEqualToZero(num) {
  return num <= 0;
}
console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));

/* Q8: create a function that returns the opposite of a boolean value */
function oppositeBoolean(bool) {
  return !bool;
}
console.log(oppositeBoolean(true));
console.log(oppositeBoolean(false));

/* Q9: Create a function that returns true if the element is NOT the number 0. */
function isNotZero(num) {
  return num !== 0;
}
console.log(isNotZero(5));
console.log(isNotZero(0));

/* Q10: Given two numbers, return their remainder when divided by each other */
function calcRemainder(num1, num2) {
  return num1 % num2;
}
console.log(calcRemainder(4, 2));
console.log(calcRemainder(7, 8));

/* Q11: Given two numbers, return true if hte number is odd. */
function isOdd(num) {
  return num % 2 !== 0;
}
console.log(isOdd(1));
console.log(isOdd(2));

/* Q12: Create a ducntion that takes a number arggument and returns 1 if the number is even and -1 if the number is odd. */
function booleanInteger(num) {
  if (num % 2 === 0) {
    return 1;
  }
  return -1;
}
console.log(booleanInteger(1));
console.log(booleanInteger(2));

/* Q13: Create a function that takes two strings. If the first is equal to 'logged in' AND the second is equal to 'subscribed' return true, otherwise return false. */
function isLoggedInAndSubscribed(loggedIn, subscribed) {
  return loggedIn === "LOGGED_IN" && subscribed === "SUBSCRIBED";
}
console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));
console.log(isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED"));

/* Also using the OR operator */
function isLoggedInAndSubscribed(loggedIn, subscribed) {
  return loggedIn === "LOGGED_IN" || subscribed === "SUBSCRIBED";
}
console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));
console.log(isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED"));