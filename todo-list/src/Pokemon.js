import React, { useEffect, useState } from 'react'
import axios from "axios"

const Pokemon = () => {

    const [num, setNum] = useState()
    const [name, setName] = useState()
    const [moves, setMoves] = useState()
    const [findmove, setFindmove] = useState()
    const changeNum = (event) => {
        setNum(event.target.value)
    }


    async function getdata() {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
        console.log(res)
        setName(res.data.name)
        setMoves(res.data.moves.length)
        setFindmove(res.data.moves[0].move.name)
        // console.log(res.data.moves[0].move.name)
    }

    getdata()


    return (
        <div>
            <h1>Pokemon {num}</h1>
            <h1>My name is {name}</h1>
            <h1>I have  {moves} Moves</h1>
            <h1>I find 1 move: {findmove} </h1>

            <select value={num} onChange={changeNum} >
                <option >0</option>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    )
}

export default Pokemon
