// The "reducer" method executes a reducer function for array element.
// The "reducer" method returns a single value: the function's accumulated result.
// The "reducer" method does not execute the function for empty array elements.
// The "reducer" method does not change the original array.

const numbers = [1,2,3,4,5]
const sum = numbers.reduce((prev,curr)=>{
    
    console.log(`prev : ${prev}`)
    console.log(`curr :${curr}`)
    return (prev+curr)
    // 0+1=1
    // 1+2=3
    // 2+3=5
    // 5+4 = 9
    // 9+5 = 14
},0)
console.log(sum)



const peoples = [
    {name:"Shiva",age:19},
    {name:"Prashant",age:21},
    {name:"Shubh",age:45},
    {name:"Raftar",age:37}

]

const oldAges = peoples.reduce((p,c)=>{
    if (c.age > p){
        return c.age
    }
    else{
        return p
    }
},0)
console.log(oldAges)


const words = [
  "apple",
  "banana",
  "orange",
  "banana",
  "apple",
  "orange",
  "apple",
  "grape",
]

const wordFrequency = words.reduce((frequency,word)=>{
    frequency[word ]= frequency[word] ||0+1
    return frequency;
},{})
console.log(wordFrequency)
