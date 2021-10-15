import React, { useState } from 'react'

const UseState = () => {

    const [state, setstate] = useState("hii")

    const changedata = () => {
        if (state === "hii") {
            setstate("welcome shubham")
        }
        else {
            setstate("hii")
        }
    }

    const [incvalue, setIncvalue] = useState(0)

    const increment = () => {

        setIncvalue(incvalue + 1)
    }

    const Decrement = () => {
        if (incvalue >= 1) {

            setIncvalue(incvalue - 1)
        }
    }

    let date = new Date().toLocaleTimeString()
    const [clock, setClock] = useState(date)

    const clockfunction = () => {
        date = new Date().toLocaleTimeString()
        setClock(date)
    }

    setInterval(clockfunction, 1000)

    const [changestring, setchangestring] = useState("shubham")
    const [bg, setbg] = useState("red")


    const changeColour = () => {

        if (changestring == "shubham") {
            setchangestring("chaudhari")
            setbg("purple")
        }
        else {
            setchangestring("shubham")
            setbg("red")
        }
    }

    const biodata = [
        { id: 1, name: "shubham", age: "26" },
        { id: 2, name: "vaibhav", age: "27" },
        { id: 3, name: "dhanjay", age: "28" },
    ]

    const [myarray, setMyarray] = useState(biodata)
    const cleardata = () => {
        setMyarray([])
    }

    const [changeData, setChangeData] = useState({
        myname: "shubham", myage: 26, rollno: "07"
    })

    const updateData = () => {

        setChangeData({ ...changeData, myname: "vaibhav" })
    }

    return (
        <>
            <h1>{state}</h1>
            <button onClick={changedata}>click me</button>

            <h1>{incvalue}</h1>
            <button onClick={increment} >Click me</button>
            <button onClick={Decrement} >Click me</button>

            <h1>{clock}</h1>
            <button onClick={clockfunction} >clock</button>

            <h1 style={{ color: bg }} >{changestring}</h1>
            <button onClick={changeColour} >click me</button>

            {
                myarray.map((value) => {
                    return (
                        <>
                            <h1>my name is {value.name} and age is {value.age} </h1>
                            <button >click me </button>
                        </>
                    )
                })
            }
            <br />
            <button onClick={cleardata}>clcik me</button>


            <h1>my name is {changeData.myname} and age is {changeData.myage} and rollNo is {changeData.rollno} </h1>
            <button onClick={updateData} >clcik me</button>

        </>
    )
}

export default UseState








