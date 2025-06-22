// Function Declratipn
function greet(){
    console.log("Hello Shiva")
}
greet();
greet();
greet();
greet();


function greet1(){
    greet()
}
greet1()


function sayHello(userName){
    return(`Hello ${userName}`)
}
console.log(sayHello("Raftaar"))
console.log(sayHello("Kr$na"))
console.log(sayHello("Karma"))


function addValue(a,b){
    return (a+b)
}
console.log(addValue(10,20))
console.log(addValue(30,50))
console.log(addValue(60,90))


function multiplpyNumbers(a,b){
    return (a*b)
}
const ans = multiplpyNumbers(10,36)
console.log(ans)

const ans1 = multiplpyNumbers(23,87)
console.log(ans1)


// Callback Function.

function showCallFunction(fn){
    const value =10;
    fn(value)
}

const res = showCallFunction(function (value){
    console.log(value)
})


function higherOrder(name,cb){
    console.log(`Hello ${name}`)
    cb()
}
function cb(){
    console.log(`I am the callback function.`)
}
higherOrder('prashant',cb)

