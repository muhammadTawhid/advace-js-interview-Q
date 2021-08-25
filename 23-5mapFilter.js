const numbers = [2, 3, 4, 5, 6, 7];
// const output = [];
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     var result = element * element;
//     output.push(result);
// }


// function square(element){
//     return element * element;
// }

// numbers.map(function(element, index, array){
//     // console.log(element, index, array);
// })

// const result = numbers.map(function(element){
//     return element * element;
// })

// using arrow function

// const result = numbers.map(x => x * x)
const square = element => element * element;
const result = numbers.map( element => element * element)

// filter, find
const getNums = numbers.filter(x => x > 5);
const isThere = numbers.find(x => x < 3);

console.log("map arry return dei result hisebe", result);
console.log("filter arry return dei result hisebe", getNums);
console.log("find only element return dei result hisebe", isThere);