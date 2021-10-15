import React from 'react'

const Home = (props) => {
    return (
        <div style={{color:'red'}}>
            <h1>Home page</h1>
            <h1>my name is {props.name}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sapiente.</p>
        </div>
    )
}

export default Home
