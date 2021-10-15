import React, { useState } from 'react'

const Forms1 = () => {

    const [userregister, setUserregister] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    })


    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUserregister({ ...userregister, [name]: value })
    }

    const [allentry, setAllentry] = useState([])

    const submitForm = (e) => {
        e.preventDefault()

        const newEntry = { ...userregister }
        setAllentry([...allentry, newEntry])
        setUserregister({ username: "", email: "", phone: "", password: "" })

    }

    return (
        <>
            <form onSubmit={submitForm} >
                <div>
                    <label htmlFor="">username</label>
                    <input type="text" value={userregister.username} name="username" onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" value={userregister.email} name="email" onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor="">Phone</label>
                    <input type="text" value={userregister.phone} name="phone" onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" value={userregister.password} name="password" onChange={handleInput} />
                </div>

                <br />

                <button type="submit">Submit</button>

            </form>

            {
                allentry.map((value) => {
                    const { username, email, phone, password } = value
                    return (
                        <>
                            <h1>{username} {email} {phone} {password} </h1>
                        </>
                    )
                })
            }

        </>
    )
}

export default Forms1
