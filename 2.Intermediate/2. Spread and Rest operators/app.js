function giveMe4(a,b,c,d){
    console.log("a", a)
    console.log("b", b)
    console.log("c", c)
    console.log("d", d)

}
const  colors = ['red','blue','orange','pink']
giveMe4(...colors)


const strNums  = ['one','two','three','four']
const morestrNums = ['five','six','seven','eight']
const conacteting = strNums.concat(morestrNums)
const concating = [...strNums,...morestrNums]
console.log(...conacteting)
console.log(concating)

const people = ["kumar",'shiva','raftaar','prashant']
const allpeople = ['krsna',...people,'badshah']
console.log(allpeople)


// spread operot using object

const obj1 = {x:1,y:2}
const obj2 = {z:3}
const obj3 = {...obj1,...obj2}
console.log(obj3)


const person = {
    name : "shiva",
    age:19,
    gender:"male",
    favRapper:"Raftaar"
}

const clonePerson = {...person,work:"programmer",location:"Jaipur"}
console.log(clonePerson)


// Rest Operator

function user(x,...userdata){
    console.log(x)
    console.log(userdata)
}
user("Shiva",19,"programming","cricket")

// Rest parametr must be in last of the paramter

// Destructring 

// 1. array 

const foo = ['one','two','three']
const [one] = foo
console.log(one)

const[red,yellow,green,pink] = foo
console.log(red,yellow,green,pink)


let a,b;
[a=5,b=4]=[1]
console.log(a)

function f(){
    return [1,2]
}

let c,d ; 
[c,d]=f()
console.log(c,d)

function f1(){
    return[1,2,3,4,5]
}

const [e, ,z] = f1()
console.log(z)

// 2. Object Destructuring

const student = {
    name:"Prashant",
    position :"First",
    classss:"12th"
}

const{name,ram,classss}=student;
console.log(name,ram,classss)

