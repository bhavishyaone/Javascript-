const att = document.querySelector("a")
console.log(att.href="https://www.youtube.com")

const input = document.querySelector("input")
console.log(input.value)

console.log(input.type)

att.href = "https://www.youtube.com"
// the above changes the link of the a tag in html through js

console.log(att.href)

console.log((input.value="Bye"))
input.value = "password"
console.log(input.value)

input.placeholder = "Please provide a string password"
console.log(input.placeholder)

// getting attribute
console.log(input.getAttribute("type"))

// setattribute

console.log(input.setAttribute("placeholder","password"))

