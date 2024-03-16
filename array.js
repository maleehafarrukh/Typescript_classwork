// array 
var fruits = ["Apple", "Banana", "Pineapple", "orange"];
console.log(fruits[0]);
console.log(fruits.length);
// Adding element to the array
fruits.push("grape");
console.log(fruits); // output: ["Apple", "Banana", "Pineapple", "orange", "grape"]
// Removing element to the array
var removedFruit = fruits.pop();
console.log(removedFruit); //output: "grape"
console.log(fruits); // output: ["Apple", "Banana", "Pineapple", "orange"]
