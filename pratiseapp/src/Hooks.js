import React, { useState } from 'react'

const Hooks = () => {

    let name = "hyllo world"
    const [myname, setmyname] = useState(name)

    const changeName = () => {

        if (myname === "shubham chaudhari Mechinacal Engineering") {
            setmyname("but Interest in Website Intustry")
        }
        else {
            setmyname("shubham chaudhari Mechinacal Engineering")
        }

    }

    const [count, setcount] = useState(0)
    let changetCount = () => {
        setcount(count + 1)
    }

    return (
        <>
            <h1>Hooks Pratise</h1>

            <h1>{myname}</h1>
            <button onClick={changeName}>Click me</button> <br />

            <h1>{count}</h1>
            <button onClick={changetCount}>Click me</button>



        </>
    )
}

export default Hooks
