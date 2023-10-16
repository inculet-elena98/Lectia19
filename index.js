// function recursie(n) {
//   if (n === 0) {
//     console.log('Task copleted!')
//     return
//   }
//   console.log('Doing something!')
//   return recursie(n - 1)
// }
// recursie(4)


// function getFactorial(number) {
//   if (number === 0) {
//     return 1
//   }
//   return number * getFactorial(number - 1)
// }
// console.log(getFactorial(5))


// function getFactorial(number) {
//   let factorial = 1
//   for (let i = number; i > 0; i--) {
//     factorial = factorial * i
//   }
//   return factorial
// }
// console.log(getFactorial(5))


// const obj = {
//   nume: 'Alex',
//   greet: function () {
//     return 'My name is ' + this.name
//   }
// }
// const obj1 = { ...obj }
// obj1.nume = 'Victor'
// console.log(obj.greet())
// console.log(obj1.greet())



// const greet = function () {
//   return 'My name is' + this.name
// }
// const obj = {
//   name: 'Iulik',
//   greet: greet
// }
// const obj1 = {
//   name: 'Alex',
//   greet: greet
// }
// console.log(obj.greet())
// console.log(obj1.greet.call(obj))


// const greet = function () {
//   return 'My name is' + this.name
// }
// const obj = {
//   name: 'Iulik',
//   greet: greet
// }
// const obj1 = {
//   name: 'Alex',
//   greet: greet
// }
// console.log(obj.greet())
// console.log(obj1.greet.apply(obj))


const greet = function () {
  return 'My name is' + this.name
}
const obj = {
  name: 'Iulik',
  greet: greet
}
const obj1 = {
  name: 'Alex',
  greet: greet
}
console.log(obj.greet('hi'))
console.log(obj1.greet.apply(obj, ['Bonjour']))
