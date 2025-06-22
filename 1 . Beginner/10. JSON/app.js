const person = {
    "name": "Shiva",
    "age": 19,
    "email": "Shiva10@gmail.com",
    "isStudent": true,
    "hobbies": ["Reading", "Coding", "Rapping"],
    "Address": "Your Space in pune Lohegaon"
}

// JSON.stringify() & JSON.parse()

console.log(person); // Original object
console.log(JSON.stringify(person)); // Converted to JSON string

const stringify = JSON.stringify(person); // Store JSON string
console.log(stringify);

const toParse = JSON.parse(stringify); // Convert back to object
console.log(toParse);

