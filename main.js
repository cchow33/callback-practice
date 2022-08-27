
// Exercise 1: Create a function addTwo that accepts one input and adds 2 to it.

const addTwo = n => { return n + 2 }
console.log(addTwo(3));

// Exercise 2: Create a function addS that accepts one input and adds an "s" to it.

const addS = string => { return string + 's' }
console.log(addS('pizza'));
console.log(addS('bagel'));

// Exercise 3: Create a function called map that takes two inputs: an array of numbers (a list of numbers) a 'callback' function - a function that is applied to each element of the array (inside of the function 'map'). Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.

const map = (array, callback) => {
  return array.map(callback)
}
console.log(map([1, 2, 3], addTwo)); // [ 3, 4, 5 ]

// OR

const map = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++){
    newArray.push(callback(array[i]));
  }
  return newArray;
}
 console.log(map([1, 2, 3], addTwo)); // [ 3, 4, 5 ]

// Exercise 4: The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.

let alphabet = "";
const letters = ["a", "b", "c", "d"];
forEach(letters, function (char) {
  alphabet += char;
});
console.log(alphabet);

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}


