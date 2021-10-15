import React from 'react'

// 1 test pratise
// const fullname = ['vinod', 'thapa']
// const biodata = [...fullname, 1, 'shubham', 20]
// console.log(fullname)
// console.log(biodata)

// 2 test pratise
// let shootergame = ['call of duty', 'far cry', 'Resident Evail', 'aspirant']
// let racingame = ['Need for spedd', 'Gran Turbines', 'Burnout', 'car racing']

// console.log(shootergame+" = "+racingame)
// console.log(...shootergame, ...racingame)

// 3 test pratise
// let shootergame = ['call of duty', 'far cry', 'Resident Evail', 'aspirant']
// var [first,...remaining] = shootergame
// console.log(first)
// console.log(remaining)

// 4 test pratise
const fullname = {
    fname: "shubham",
    lname: "chaudhari"
}

const biodata = {
    id: 1,
    ...fullname,
    age: 23,
    male: "Male"
}

console.log(biodata)

const Spread = () => {
    return (
        <>
            <div>
                <h1>spread opeartor</h1>

            </div>
        </>
    )
}

export default Spread
