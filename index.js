// in this file we will practice the map, filter and reduce methods
// so lets get started

// first map method practice
// map loops and return the value in an array using the push function in the back ground

// 1)
//  first practice
// show array of numbers using map loop
// const numbers = [1, 2, 3, 4, 5]

// numbers.map(number => {
//     console.log(number)
// })

// 2) second practice

// double the value of number in the array using the map method

// let number = [1, 2 ,3, 4, 5].map(numbers => numbers * 2) 

// console.log(number)

// lets write the double funciton

// const double = (number) => {

//    return number.map(numbers => numbers * 2)
// }

// console.log(double([1, 2, 3, 4]))



// .filter method
// filter method loOps through and return and array matching to the conditionals

// 1) first practice

// lets find greater numbers then a number

// const number = [1, 2, 3, 4, 5, 6]

// console.log(number.filter(num => num > 3 || num < 2))


// 2) second exercise 
// using filter on the array of objects

// const actors = [
//     { name: "ibrahim", netWorth: 3000000 },
//     { name:"waqas",    netWorth: 2000000 },
//     { name:"zulfiqar",    netWorth: 2000000 },
//     { name:"nazir",    netWorth: 4000000 },
// ]

// let result = actors.filter(actor => actor.netWorth > 2000000)
// console.log(result)

// let names = result.map(actor => actor.name).join(", ")
// console.log(names)


// <==================== END =====================>

// .reduce method ( these three methods also known as higher  order function)
// reduce is use for accumulate a value
// reduce use two values first one is a function and second one is a accumulator

// 1) first exercise

// sum of numbers in an array using reduce mathod

const number = [1, 4, 9]
// let result = number.reduce((prev, nex ) => prev + nex, 0)
// console.log(result)

// for emplicit 
// let result = array.reducemethod((prev, nex) => prev +nex ,0)
// let reusult = array.mapmethod(object => operation/operations)
// let reusult = array.filtermethod(object => conditions/operation)

// for explicit use squiglies after the arrow funcion
// let result = array.reducemethod((prev, nex) => prev +nex ,0)
// f
// 

const roots = number.map(num => Math.sqrt(num))
console.log(roots)
console.log(number)



