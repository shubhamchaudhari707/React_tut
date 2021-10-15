import React, { useState } from 'react'
import "./index.css"

const Search = () => {



    const [name, setname] = useState("")

    const inputEvent = (event) => {

        setname(event.target.value)

    }

    let imgdisplay
   
    if (name.length >= 3) {
        imgdisplay = `https://source.unsplash.com/random/600x400?${name}`
    }
    

    return (
        <>
            <div className="searchbar">
                <input type="text" placeholder="search anything" value={name} onChange={inputEvent} />

                <img src={imgdisplay} alt="photo" />

            </div>


        </>
    )
}

export default Search
