const initialValue = [1,2,3,4,4,55,66,6,66]
const mySet = new Set(initialValue);
mySet.add("Raftaar",{name:"Shiva",age:19})
mySet.delete(66)
console.log(mySet)
console.log(mySet.size)
console.log(mySet.has("Raftaar"))

const letters = new Set()
letters.add('a')
letters.add('b')
letters.add('c')
console.log(letters)

for(let i of letters){
    console.log(i)
}
