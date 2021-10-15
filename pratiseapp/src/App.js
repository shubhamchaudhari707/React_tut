import React from 'react'
import Miniproject1 from "./Miniproject1"
import { add, sub, name, mul, Div } from "./Calculatotr"
import Movies from "./Movies"
import Sdata from "./Sdata"
import Hooks from "./Hooks"
import RulesHooks from "./rulesHooks"


const slotM = (x, y, z) => {

    if ((x === y) && (y === z)) {
        return (
            <>
                <div>
                    <h1> {x} {y} {z} </h1>
                    <h1>All same </h1>
                    <hr />
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div>
                    <h1> {x} {y} {z} </h1>
                    <h1>All are not same </h1>
                    <hr />
                </div>
            </>
        )
    }
}





const App = () => {
    return (
        <>

            {/* <Miniproject1 /> */}

            {/* <h1>the sum is {add(10, 10)} </h1>
            <h1>the sub is {sub(10, 20)} </h1>
            <h1>the mul is {sub(10, 100)} </h1>
            <h1>the Div is {sub(10, 100)} </h1> */}

            {/* <Movies
                link={Sdata[0].link}
                title={Sdata[0].title}
                title1={Sdata[0].title1}
                link1={Sdata[0].link1}

            />
            <Movies
                link={Sdata[1].link}
                title={Sdata[1].title}
                title1={Sdata[1].title1}
                link1={Sdata[0].link1}
            />
            <Movies
                link="https://picsum.photos/200/300"
                title="Movies"
                title1="A Movies Prigional Series"
                link1="https://www.youtube.com/"
            /> */}

            {/* {Sdata.map((value) => {
                return (
                    <Movies
                        key={value.id}
                        link={value.link}
                        title={value.title}
                        title1={value.title1}
                        link1={value.link1}
                    />
                )
            })} */}


            {/* <h1>Welcome To Slot machine</h1>
            {slotM("😀", "😀", "😀")} */}

            {/* <Hooks/> */}

            <RulesHooks />


        </>
    )
}

export default App
