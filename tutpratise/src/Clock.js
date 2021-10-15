import React, { useState } from 'react'

const Clock = () => {

    let new_time = new Date().toLocaleTimeString()
    const [ctime, setctime] = useState(new_time)


    function updatetime() {
        new_time = new Date().toLocaleTimeString()
        setctime(new_time)
    }

    return (
        <>
            <h1 id="clock">{ctime}</h1>
            <button onClick={updatetime}>Click Me</button>
        </>
    )
}

export default Clock
