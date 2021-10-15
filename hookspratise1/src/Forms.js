import React, { useState } from 'react'

const Forms = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [allentry, setAllentry] = useState([])

    const submitForm = (e) => {
        e.preventDefault()
        const newEntry = { email, password }

        setAllentry([...allentry, newEntry])
        console.log(allentry)

        setEmail("")
        setPassword("")
    }

    return (

        <>

            <h1 style={{ textAlign: "center", color: "red" }}>forms Pratise</h1>

            <form onSubmit={submitForm} >

                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <br />
                <button>click me </button>
            </form>

            {
                allentry.map((value) => {
                    return (
                        <>
                            <h1>{value.email}</h1>
                            <h1>{value.password}</h1>

                        </>
                    )
                })
            }

        </>
    )
}

export default Forms
