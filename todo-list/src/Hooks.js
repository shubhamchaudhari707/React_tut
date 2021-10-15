import React, { useState } from 'react'

const Hooks = () => {
    const obj = [
        { id: 1, name: "shubham", age: 22 },
        { id: 2, name: "vaibhav", age: 23 },
        { id: 3, name: "dhanjay", age: 24 },
    ]

    const [myarray, setmyarray] = useState(obj)

    const changeName = (id) => {
        // alert(id)
        const MyNewArray = myarray.filter((cvalue) => {
            // alert(cvalue.id)
            return cvalue.id !== id
        })

        setmyarray(MyNewArray)
    }

    return (
        <div>
            {
                myarray.map((value) => {
                    return (
                        <>
                            <h1> my name is {value.name} and age is {value.age} </h1>
                            <button onClick={() => changeName(value.id)} >Click Me</button>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Hooks
