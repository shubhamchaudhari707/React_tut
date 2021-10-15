import React, { useState, useEffect } from 'react'

const Useeffect = () => {

    const [count, setcount] = useState(0)

    const countdata = () => {
        setcount(count + 1)
    }
    const countdataminus = () => {
        if (count >= 1) {
            setcount(count - 1)
        }
    }

    useEffect(() => {
        if (count >= 1) {
            document.title = `chats (${count}) `
            console.log("increment")
        }
        else {
            document.title = `chats `
            console.log("decrement")
        }
    }, )

    return (
        <>
            <div>
                <p>{count}</p>
                <button onClick={countdata}>click me + </button>
                <button onClick={countdataminus}>click me - </button>
            </div>
        </>
    )
}

export default Useeffect
