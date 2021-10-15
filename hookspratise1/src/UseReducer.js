import React, { useReducer } from 'react'

const initialState = 0

const reducer = (state, action) => {
    console.log(state, action)
    if (action.type === "INCREMENT") {
        return state + 1
    }
    else if (action.type === "DECREMENT") {
        return state - 1
    }
    return state
}

const UseReducer = () => {


    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <h1>UseReducer </h1>

            <h1>{state}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Inc +</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Inc -</button>
        </>
    )
}

export default UseReducer
