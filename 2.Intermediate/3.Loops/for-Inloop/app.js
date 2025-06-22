const person ={
    name:"Shiva",
    age:19,
    gender :"Male",
    city:"Jaipur"
}

for (let keys in person){
    console.log(keys , person[keys])
    // console.log(person[keys])
}

let list = ['one','two','three','four','five']
for (let index in list){
    console.log(list[index])
}