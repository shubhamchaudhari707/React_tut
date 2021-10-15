import React, { useState } from 'react'

const RulesHooks = () => {

    let mybiodata = [
        {
            id: 0, myname: "vinod", age: 26
        },
        {
            id: 1, myname: "Shubham", age: 23
        },
        {
            id: 2, myname: "chaudhari", age: 25
        },
    ]

    const [myarray, setmyarray] = useState(mybiodata)

    const clearData = () => {
        setmyarray([])
    }

    const removeElement=(id)=>{
        // alert(id)
        const myNewArray = myarray.filter( (cvalue)=>{
            return cvalue.id !== id
        } )
        setmyarray(myNewArray)
    }

    return (

        <div>
            {
                myarray.map((value) => {
                    return (
                        <>
                            <h1 key={value.id} >my name is {value.name} and age is {value.age} 
                            <button onClick={ ()=> removeElement(value.id)}>Delete</button>
                            </h1>
                        </>
                    )
                })
            }
            <button onClick={clearData}>Delete</button>
        </div>
    )
}

export default RulesHooks
