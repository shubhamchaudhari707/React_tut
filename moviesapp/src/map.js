// array map method

// const oldarray = ['vinod', 'bhadhur', 'thapa']
// console.log(oldarray)
// console.log(oldarray[0])
// console.log(oldarray[1])
// console.log(oldarray[2])


// const newarry = ['vinod', 'bhadhur', 'thapa']
// newarry.map((cvalue, i, array) => {
//     console.log(i + ":" + cvalue + ":" + array)
// })

const StudentDta = [
    { id: 1, name: "shubham", degree: "BE" },
    { id: 2, name: "vaibhav", degree: "BE" },
    { id: 3, name: "dhanjay", degree: "BE" },
]
for (let i = 0; i < StudentDta.length; i++) {
    const element = StudentDta[i];
    console.log(`my name is ${StudentDta[i].name} and degree is ${StudentDta[i].degree}`)

}
console.log("---------------------------------------------")


StudentDta.map((value, i, array) => {
    console.log(`my name is ${value.name} and dgree is ${value.degree}`)
})















