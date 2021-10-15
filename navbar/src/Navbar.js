import React from 'react'
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/service">Service</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/user/shubham/">User</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/search">search</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/todo">Todo</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/todos">Todos</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/todo1">Todo1</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/images">Images</NavLink>
                        </li>

                    </ul>

                </div>
            </nav>
        </>

    )
}

export default Navbar
