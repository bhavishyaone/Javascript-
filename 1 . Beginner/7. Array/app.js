const fruits = ["mango","banana","apple","strawberry"]
console.log(fruits)
console.log(typeof(fruits))


const myList = []
console.log(myList)

// Accessing Item from array
console.log(fruits[0])
console.log(fruits[1])

// 1. Concating 
const favRapper = ["Raftaar", "Krsna", "Seedhe maut","Badshah"]
const favNumber = [1,23,5,68,78]
const newArr = favRapper.concat(favNumber) 
console.log(newArr)

// 2. Includes Method
console.log(favRapper.includes("Raftaar"))
console.log(favRapper.includes("Karma"))

// 3. Push Method 
favRapper.push("Karma")
console.log(favRapper)

const newRapper = ["panmther","Lashcurry","bassick"]
favNumber.push(newRapper)
console.log(favNumber)

// 4. Unshift Method
favRapper.unshift("Deep Kalsi")
console.log(favRapper)

// 5. Pop Method
favRapper.pop()
console.log(favRapper)

// 6. Shift Method
favRapper.shift()
console.log(favRapper)

// 7. Sort Method
favRapper.sort()
console.log(favRapper)

let numbers = [1,2,3,4,10001,2778,600878,51000]
numbers.sort()
console.log(numbers)
// This will sort lexographically.

numbers.sort((a,b)=>a-b)
console.log(numbers)
numbers.sort((a,b)=>b-a);
console.log(numbers)

// 8. slice methods
const slicedArray = numbers.slice(1,5)
console.log(slicedArray)

// 9. Splice Method in array

// array.splice(start, deleteCount, item1, item2, ...)
console.log(favRapper)
favRapper.splice(1,3,"Brodha V")
console.log(favRapper)


