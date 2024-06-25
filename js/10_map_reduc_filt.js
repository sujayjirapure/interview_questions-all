//map
//The map() method is used for creating a new array from an existing one,

let arr = ["abc" ,"sujay"];

let ans = arr.map((index) => {
    console.log(index);
})



//filter 
//The filter() method takes each element in an array and it applies a conditional statement against it.
// If this conditional returns true, the element gets pushed to the output array.

const numbers = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]



//reduce()
//It reduces all the elements of the array to a single value

function product(a, b){ 
    return a * b; 
} 
arr = new Array(1, 2, 3, 6, 5, 4); 
  
var product_of_arr = arr.reduce(product) 
console.log(product_of_arr) 