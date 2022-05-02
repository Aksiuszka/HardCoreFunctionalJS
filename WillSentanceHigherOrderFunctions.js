// A higher-order function is a function that can take another function as an argument, or that returns a function as a result. 

const copyArrAndManipulate = ( array, func ) => {
    const output = [];
    for ( let i =0; i < array.length; i++ ){
        output.push(func(array[i]));
        console.log(output);
    }
    return output
}
const multiply = (number) => number*2;

const result = copyArrAndManipulate([123], multiply);
console.log(result + '!!!');

// challenges
//Challenge 1 Create a function addTwo that accepts one input and adds 2 to it.

const addTwo = input => input + 2;
//Check
console.log(addTwo(3));

// Challenge 2
// Create a function addS that accepts one input and adds an "s" to it.
const addS = input => input + 'S';
console.log(addS('bagel'));

// Challenge 3
// Create a function called map that takes two inputs:
// an array of numbers (a list of numbers)
// a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
// Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.

const array=[5,6,7];

const map = (array, callback) => {
    const mappedArray = [];
    for (let i = 0; i < array.length; i++) {
      mappedArray.push(callback(array[i]));
    }
    return mappedArray;
  };

// Challenge 4
// The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.
const letterArray = ['a', 'b', 'c'];
const showElements= (array, callback) => {

    array.forEach(element => console.log(callback(element)));

};

// Challenge 5
// For this challenge, you're going to rebuild map as mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop.
  
const mapWith = (arr, callback) =>{
    const newArr =[];
    arr.forEach(el => newArr.push(callback(el)));
    return newArr
}

