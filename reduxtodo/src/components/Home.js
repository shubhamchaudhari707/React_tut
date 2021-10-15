import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { addTodo, deleteTodo, removeTodo, incNumber } from "../actions/index"
import { useDispatch, useSelector } from "react-redux"

const Home = () => {
    const dispatch = useDispatch()

    const [inputData, setInputData] = useState("")
    const list = useSelector(state => state.todoReducers.list)
    const myadd = useSelector(state => state.add)

    return (
        <>

            <div className="container mt-5 text-center">

                <h1>redux todo Pratise</h1>
                <h1 style={{ color: "greenyellow" }} >Add Your List Here</h1>

                <div className="mt-5">
                    <input type="text" placeholder="✍ Add Items" value={inputData} onChange={(e) => setInputData(e.target.value)} />
                    <button className="btn btn-primary btn-sm" onClick={() => dispatch(addTodo(inputData), setInputData(""))} >Add Items</button>
                </div>

                <div className="d-flex justify-content-lg-center mt-5">

                    {
                        list.map((elem) => {
                            return (
                                < >


                                    <h3 style={{ color: 'red' }} className="" key={elem.id} >{elem.data}</h3>

                                    <div>
                                        <button className="btn btn-primary btn-sm" onClick={() => dispatch(deleteTodo(elem.id))} >Delete</button>
                                    </div>
                                    <br />


                                </>
                            )
                        })
                    }
                    <br />
                    <br />

                </div>

                <div>
                    <button onClick={()=>(dispatch(removeTodo()))} >Delete All </button>
                </div>

            </div>

            <div>
                <h1>{myadd}</h1>
                <button onClick={()=>dispatch(incNumber())}>+</button>
            </div>

        </>
    )
}

export default Home
