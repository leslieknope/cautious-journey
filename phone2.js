
// Functionality:
// Write a Node program that uses some sort of loop to buy phones and accessories when you have enough money to do so.
// Add a “spending threshold” such that you have at least that much money left in your account when you are done.
// Make sure you are adding a 9% tax to all of your purchases.
// Include helper functions. At the very least, you’ll need ones to calculate tax and convert dollar numbers to strings with “$” and exactly two decimal places.
// Your program should console.log at a minimum what was purchased, for how much, and how much money is left over. You can of course log out more if you’d like.
// Code:
// Use CONSTANT_SYNTAX for constant names and camelCase for variable names.
// Private information like bankAccount should not be exposed to the global scope.
// Use pure functions to manipulate and return data when possible.
// Any unpure functions should do only one thing.

function subtractCost(balance) {
    return function(cost) {
        return balance - cost;
    };
}
var getBalance = subtractCost();

console.log(getBalance(20));


//book example
function greaterThan(n) {
  return function(m) { return m > n; };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
console.log(greaterThan10(9));