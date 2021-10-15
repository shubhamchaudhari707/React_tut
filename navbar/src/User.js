import React from 'react'
import { useParams, useLocation, useHistory } from "react-router-dom"

const User = () => {
    const { name, lname } = useParams()
    const location = useLocation()
    const history = useHistory()
    console.log(history)

    return (
        <>

            <div style={{ color: "skyblue" }}>
                <h1>hhvhhfvhdvhlh</h1>
                <p>{name}</p>
                <p>{name} {lname}</p>
                <h1>My current location is {location.pathname}</h1>

                {location.pathname == "/user/shubham/chaudhari" ? (
                    <button onClick={() => { history.push("/") }}>Go Back</button>
                ) : null}

            </div>

        </>
    )
}

export default User
