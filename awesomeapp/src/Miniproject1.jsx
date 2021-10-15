import React from 'react'


var today = new Date()
// var today = new Date(2020, 5, 23, 20)
var curHr = today.getHours();
let greeting = ""
const mystyle = {};

if (curHr < 12) {
    greeting = "good morning."
    mystyle.color = "green"
}
else if (curHr < 18) {
    greeting = "good afternoon"
    mystyle.color = "orange"
}
else {
    greeting = "good evening"
    mystyle.color = "skyblue"
}

const Miniproject1 = () => {
    return (
        <>

            <h1 id="color">hyllo sir, <span style={mystyle} >{greeting} </span> </h1>

        </>
    )
}

export default Miniproject1
