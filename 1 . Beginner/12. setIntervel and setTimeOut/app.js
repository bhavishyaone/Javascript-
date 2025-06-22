// SetIntervel 

const funcExecution = setInterval(()=>{
    console.log(`This function will executed over evry 2 second`)
},2000)
console.log(funcExecution)

// setToimeout 

const seetTimeout = setTimeout(()=>{
    console.log(`This function will be executed after 3 second`)
},3000)
console.log(seetTimeout)


// Stop the intervel
const intervelId = setInterval(()=>{
    console.log(`This code will executed upto yhe intervel`)
});
setTimeout(()=>{
    clearInterval(intervelId)
})
