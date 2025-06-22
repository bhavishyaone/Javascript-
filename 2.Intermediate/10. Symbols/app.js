// Symbol is a unique and immutable primitive data type introduced in ECMAScript 6 (ES6). A symbol is often used as an identifier for object properties to avoid potential naming conflicts.

// Unlike strings or numbers, symbols are guaranteed to be unique. When you create a symbol, it is unique and cannot be recreated or changed. This uniqueness ensures that symbols will not collide with other property names, even if they have the same string representation.


const mySymbol = Symbol();
console.log(typeof(mySymbol))

// Comparing Symbol 

const mysymbol1 = Symbol("name")
const mysymbol2 = Symbol("name")

console.log(mysymbol1===mysymbol2)

const obj = {}
obj[mysymbol1] = "Value 1"
obj[mysymbol2] = "Value 2"
console.log(obj)

const person ={}
person.age = 19;
person.name = "Shiva"
person.gender = "female"
person.gender = "male"
person.mySymbol1 = "Raftaar"
person.mysymbol2 = "Badshah"

console.log(person)

