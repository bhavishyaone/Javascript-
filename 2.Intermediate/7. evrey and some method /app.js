const peoples = ["ram","sita","radha","krishna",'asha',"gopal"]
const ans = peoples.every((people)=>{
    return (people.length===4)
})

const ans1 = peoples.every((people)=>{
    return (people.length>=3)
})
console.log(ans)
console.log(ans1)

const ans2 = peoples.some((people)=>{
    return (people.length>5)
})
console.log(ans2)

