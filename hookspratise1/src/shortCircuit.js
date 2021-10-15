import React, { useState } from 'react'

const ShortCircuit = () => {

    const [name, setname] = useState("lklk")

    return (
        <div>
            <h1>{name || "chuadhari"}</h1>
            <h1>{name && "chuadhari"}</h1>
            <h1>{name ? "good morning" : "good night"}</h1>

        </div>
    )
}

export default ShortCircuit
