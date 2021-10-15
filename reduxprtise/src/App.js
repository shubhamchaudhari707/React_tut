import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber, mulNumber, divNumber } from './actions/index'

const App = () => {

  const myState = useSelector((state) => state.changeTheNumber)
  const myOtherState = useSelector((state) => state.mulTheNumber)
  const dispatch = useDispatch()

  return (
    <>

      <h1>Welcome Redux</h1>

      <h3>Increment Dercrement Counter using <span style={{ color: "red" }}>React & Redux</span> </h3>

      <div>

        <h1> {myState} </h1>
        <button onClick={() => dispatch(incNumber(5))} >INC +</button>
        <button onClick={() => dispatch(decNumber(5))} >DEC -</button>

      </div>

      <div>

        <h1> {myOtherState} </h1>
        <button onClick={() => dispatch(mulNumber(5))} >*</button>
        <button onClick={() => dispatch(divNumber(5))} >/</button>

      </div>



    </>
  )
}

export default App
