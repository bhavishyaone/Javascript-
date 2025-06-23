let fistLi = document.querySelector("li")
console.log(fistLi.parentElement)
console.log(fistLi.parentElement.parentElement)
console.log(fistLi.parentElement.parentElement.parentElement)
console.log(fistLi.parentElement.parentElement.parentElement.parentElement)


const findChildren = document.querySelector("ul")
console.log(findChildren.children[0])
console.log(findChildren.children[1])
console.log(findChildren.children[2])
console.log(findChildren.children[3])
console.log(findChildren.childElementCount)

console.log(findChildren.children[0].innerText="Ram Ram")


// next e;lemnt sibling

console.log(fistLi.nextElementSibling);
console.log(fistLi.nextElementSibling.nextElementSibling);
console.log(fistLi.nextElementSibling.nextElementSibling.innerText);

const fourthLi = document.querySelector('.fourth')
console.log(fourthLi.previousElementSibling)
console.log(fourthLi.previousElementSibling.previousElementSibling)
console.log(fourthLi.previousElementSibling.previousElementSibling.previousElementSibling)
console.log(fourthLi.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling)

