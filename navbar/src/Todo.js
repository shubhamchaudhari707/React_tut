import React, { useState, useEffect } from 'react'

const Todo = () => {

    const [name, setname] = useState('')

    const onchangeinput = (event) => {
        setname(event.target.value)
    }

    const [show, setshow] = useState()
    const [img, setImg] = useState("")

    const submitform = (e) => {

        // if (e.target.value >= 3) {
        //     e.preventDefault()
        //     setshow(name)
        //     setImg(`https://source.unsplash.com/random/600x400?${name}`)
        // }

        e.preventDefault()
        setshow(name)
        setImg(`https://source.unsplash.com/random/600x400?${name}`)
    }


    return (
        <>
            <form action="" onSubmit={submitform} className="searchbar">
                <input type="text" placeholder="enter your name" value={name} onChange={onchangeinput} minLength="3" />

                <button>submit</button>
                <p>{show}</p>
                <img src={img} alt="photo" />

            </form>
        </>
    )
}

export default Todo
