import React from 'react'

const About = (props) => {
    return (
        <div style={{color:'green'}}>
            <h1>About Page</h1>
            <h1>last name is {props.lname} </h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, earum. </p>
        </div>
    )
}

export default About
