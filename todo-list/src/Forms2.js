    import React, { useState } from 'react'

const Forms2 = () => {

    const [userregister, setuserregister] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    })

    const handleinput = (e) => {
        const name = e.target.name
        const value = e.target.value
        // console.log(name)
        // console.log(value)

        setuserregister({ ...userregister, [name]: value })
    }

    const [records, setRecords] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()

        const newrRecord = { ...userregister, id: new Date().getTime().toString() }
        setRecords([...records, newrRecord])
        console.log(records)

        // clean data
        setuserregister({ username: "", email: "", phone: "", password: "" })
    }

    return (
        <>

            <form action="" onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="">username </label>
                    <input type="text" name="username" id="" value={userregister.username}
                        onChange={handleinput} autoComplete="off" />
                </div>

                <div>
                    <label htmlFor="">Email </label>
                    <input type="email" name="email" id=""
                        onChange={handleinput} value={userregister.email}
                    />
                </div>

                <div>
                    <label htmlFor="">Phone </label>
                    <input type="text" name="phone" id=""
                        onChange={handleinput} value={userregister.phone}
                    />
                </div>

                <div>
                    <label htmlFor="">Password </label>
                    <input type="text" name="password" id=""
                        onChange={handleinput} value={userregister.password}
                    />
                </div>

                <br /> <br />
                <button type="submit">Registation</button>
            </form>

            <div>
                {
                    records.map((value) => {
                        const { id, username, email, phone, password } = value
                        return (
                            <>
                                <h1 key={id} > {username} {email} {phone} {password} </h1>
                            </>)
                    })
                }
            </div>

        </>
    )
}

export default Forms2
