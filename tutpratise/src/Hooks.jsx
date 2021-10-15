import React, { useState } from 'react'

const Hooks = () => {
    // old method
    // let count = 1
    // const IncNum = () => {
    //     document.getElementById("show").innerHTML = count++
    // }

    // new method
    const [count, setCount] = useState(0)

    const IncNum = () => {
        setCount(count + 1)
    }


    let [myname, setMyname] = useState("Shubham Chaudhari Mechnical Engineering")

    const changename = () => {

        if (myname === "Shubham Chaudhari Mechnical Engineering") {
            setMyname("But Work FullStack Developer")
        }
        else {
            setMyname("Shubham Chaudhari Mechnical Engineering")
        }
    }


    return (
        <>

            <h1 id="show">{count}</h1>
            <button onClick={IncNum} >Click Me</button>

            <h1>{myname}</h1>
            <button id="" onClick={changename}>Click Ne Plz</button>
        </>
    )
}

export default Hooks
