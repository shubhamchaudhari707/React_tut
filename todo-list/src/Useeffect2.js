import React, {useState, useEffect} from 'react'

const Useeffect2 = () => {

    const [windowcount, setwindowcount] = useState(window.screen.width)

    const actualwidth=()=>{
        console.log(window.innerWidth)
        setwindowcount(window.innerWidth)
    }

    useEffect( ()=>{
        console.log("add event")
        window.addEventListener("resize", actualwidth)

        return ()=>{
            console.log('remove event')
            window.removeEventListener("resize", actualwidth)
        }
    } )

    return (
        <div>
            <p>The actual siz eof the windows is </p>
            <p>{windowcount}</p>
        </div>
    )
}

export default Useeffect2
