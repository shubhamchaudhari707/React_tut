import React from 'react'

// var today = new Date(2020, 5, 27, 20)
var today = new Date()
var curHr = today.getHours()
let msg = ""
let mystyle = {}

if (curHr < 12) {
    msg = "good morning."
    mystyle.color = "green"
}
else if (curHr < 18) {
    msg = "good afetrnoon"
    mystyle.color = "orange"
}
else {
    msg = "good evening"
    mystyle.color = "skyblue"
}

const Miniproject1 = () => {
    return (
        <div>
            <h1 >Hello Sir, <span style={mystyle}> {msg}</span> </h1>
        </div>
    )
}

export default Miniproject1
