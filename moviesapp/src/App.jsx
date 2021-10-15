import React from 'react'
import "./index.css"
import Card from "./Card"
import Sdata from "./Sdata"


const App = () => {
    return (
        <>
            {/* <Card
                imgsrc={Sdata[0].imgsrc}
                title={Sdata[0].title}
                title1={Sdata[0].title1}
            /> */}

            {/* <Card
                imgsrc={Sdata[1].imgsrc}
                title={Sdata[1].title}
                title1={Sdata[1].title1}
            /> */}

            {/* <Card
                imgsrc="https://cdn.pixabay.com/photo/2020/03/16/06/36/wait-for-a-call-4935894_1280.jpg"
                title="A NMX-player Origional Series"
                title1="Orange"
            /> */}

            { Sdata.map( (value) => {
                return (
                    <Card
                        key={value.id}
                        imgsrc={value.imgsrc}
                        title={value.title}
                        title1={value.title1}
                    />
                )
            })}

        </>
    )
}

export default App



