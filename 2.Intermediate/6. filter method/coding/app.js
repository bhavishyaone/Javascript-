// made new array of elemnt that passed that condition
// Returns the elements of an array that meet the condition specified in a callback function.



const songs = [
    {name:"saza-e-maut",artist:"krsna"},
    {name:"dehshat ho",artist:"raftaar"},
    {name:"Narmhat",artist:"Karma"},
    {name:"Goat-Shit",artist:'king'}
]

const filterOut = songs.filter((song)=>{
    return (song['artist']=="raftaar" || song['name']=='Narmhat')

})
console.log(filterOut)

const arr = [1,2,3,4,5,6,75854]
const res = arr.filter((num)=>{
    return num>=5
})
console.log(res)

const computers = [
    {ram:"4Gb",hdd:"100gb"},
    {ram:"6Gb",hdd:"400gb"},
    {ram:"8Gb",hdd:"800gb"},
    {ram:"12Gb",hdd:"1600gb"},
    {ram:"16Gb",hdd:"800gb"},
    {ram:"32Gb",hdd:"900gb"}

]

console.log(computers)
const result = computers.filter((c)=>{
    return c.ram >"4Gb"
})
console.log(result)