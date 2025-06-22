const person = {
    name:"Bhavishya",
    age:19,
    student:true,
    favRapper : "Raftaar",
    Locationn : "India",
    Field : "Computer Science",
    10 : 95.8,
    "1bhavishya" :78
}

console.log(person)
console.log(typeof(person))

// Accesing in object
console.log(person.age)
console.log(person["Locationn"])

// differnec bwteen Dot and Bracket Notation
console.log(person["10"])
console.log(person["1bhavishya"])

person.city = "Jaipur"
console.log (person)

delete person["city"]
console.log(person)