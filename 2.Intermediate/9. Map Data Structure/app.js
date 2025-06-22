const map = new Map();
console.log(map)

const keyOne = "string"
const keyTwo = {}
const keyThree = function() {}

map.set(keyOne,"Value of key one")
map.set(keyTwo,"Value of key two")
map.set(keyThree,"value of key three")
console.log(map)
console.log(map.keys())
console.log(map.values())
console.log(map.delete(keyTwo))

for (let [key,value] of map){
    console.log(`${key} -- ${value}`)
}

// Exercise 

const mapp = new Map();

mapp.set("a",1);
mapp.set("b",2)
mapp.set("c",3)

console.log(mapp.get('a'))
console.log(mapp.get('b'))
console.log(mapp.delete('b'))
console.log(mapp.size)

