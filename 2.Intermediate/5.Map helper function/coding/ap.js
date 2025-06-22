// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.


let numbers = [1,2,3,45,6]
let double = numbers.map((number)=>{
    return (number*2)
})
console.log(double)

// maps on Object

const people = [
    {firstName :'Shiva'},
    {lastName : "Sharma"},
    {age:19},
    {work:"programmer"}
]

