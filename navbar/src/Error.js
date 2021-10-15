import React from 'react'
import { NavLink } from "react-router-dom"


const Error = () => {
    
    return (
        <div>
            <h1>404 Page not Fount</h1>
            <NavLink to="/" >GoBack</NavLink>
        </div>
    )
}

export default Error
