import React, { useState } from 'react'

const Forms = () => {


    const [fullname, setnameFullName] = useState({
        fname: "",
        lname: "",
    })


    const inputEvent = (event) => {
        console.log(event.target.value)
        console.log(event.target.name)

        let value = event.target.value
        let name = event.target.name

        setnameFullName((preValue) => {
            // console.log(preValue)
            if (name === "fName") {
                return {
                    fname: value,
                    lname: preValue.lname
                }
            }
            else if (name === "lName") {
                return {
                    lname: value,
                    fname: preValue.lname,
                }
            }
        })
    }


    const onSubmit = (event) => {
        event.preventDefault()
        alert("form submitted")

    }

    // const [name, setname] = useState("")
    // const [fullName, setfullName] = useState("")
    // const [lname, setlname] = useState("")
    // const [lnameNew, setlnameNew] = useState("")

    // const inputEvent = (event) => {
    //     console.log(event.target.value)

    //     setname(event.target.value)
    // }
    // const inputEventTwo = (event) => {
    //     console.log(event.target.value)

    //     setlname(event.target.value)
    // }

    // const onSubmit = (event) => {
    //     event.preventDefault()
    //     setfullName(name)
    //     setlnameNew(lname)
    // }


    return (
        <>
            <div>

                <form >

                    <h1>Hello {fullname.fname} {fullname.lname} </h1>
                    <input type="text" placeholder="Enter Your Name" onChange={inputEvent} name="fName" value={fullname.fname} /><br />
                    <input type="text" placeholder="Enter Your Name" onChange={inputEvent} name="lName" value={fullname.lname} /><br />

                    <button type="submit" onClick={onSubmit} >Click Me</button>

                </form>

            </div>
        </>
    )
}

export default Forms
