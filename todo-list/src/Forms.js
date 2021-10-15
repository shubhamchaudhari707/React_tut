import React, { useState } from 'react'

const Forms = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [allentry, setallNewEntry] = useState([])

    const submitForm = (event) => {
        event.preventDefault()

        const newEntry = { id: new Date().getTime().toString(), email: email, password: password }

        setallNewEntry([...allentry, newEntry])
        console.log(allentry)

        setEmail("")
        setPassword("")

    }

    return (
        <>
            <form onSubmit={submitForm}>
                <div>
                    <label htmlFor="email">email:</label>
                    <input type="email" name="email" id="email" autoComplete="off"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password" autoComplete="off"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                </div> <br />

                <button type="submit" >Login</button>
            </form>

            <br /> <br />
            <div>
                {
                    allentry.map((value) => {

                        const { id, email, password } = value
                        return (
                            <>
                                <div key={id}>
                                    <p>{email}</p>
                                    <p>{password}</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Forms
