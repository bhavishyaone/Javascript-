// 1. getElementByTagName
console.log(document.getElementsByTagName("h1"))
console.log(document.getElementsByTagName("h1").length)


// 2. getElementByClassName
console.log(document.getElementsByClassName("cls"))
console.log(document.getElementsByClassName("clas-1"))

// 3. getElementBYId
console.log(document.getElementById("main"))
console.log(document.getElementById("id-1"))


// 4. querySelector
console.log(document.querySelector("h1"))
console.log(document.querySelector("#id-1"))

// 5. quesrySelectorAll
console.log(document.querySelectorAll("#id-1"))
console.log(document.querySelectorAll(".cls"))
console.log(document.querySelectorAll(".cls").length)


// 6. Storing data in variable

const shiva = document.querySelector("h1")
console.log(shiva)


