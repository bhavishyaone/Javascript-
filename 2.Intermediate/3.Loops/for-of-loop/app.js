// The JavaScript for of statement loops through the values of an iterable object.

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:


let peoples = ["shiva",'pradhant',"bhavishya",'ram','asha']
for (let people of peoples){
    console.log(people)
}

const obj = {
    name:"Shiva",
    age:19,
    city:"jaipur",
    work:"programmer"
}
for (let [key, value] of Object.entries(obj)) {
    console.log(key, value);
}
