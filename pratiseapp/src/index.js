import React from "react"
import ReactDom from "react-dom"
import "./index.css"
import App from "./App"

// const name = "shubham"
// const lname = "chaudhari"
// let date = new Date().toLocaleDateString()
// let time = new Date().toLocaleTimeString()

// let img1 = "https://picsum.photos/200/300"
// let img2 = "https://picsum.photos/id/237/200/300"
// const mystyle = {
//   color: "orange",
//   textTransform:"uppercase"
// }

ReactDom.render(
  <>
{/* 
    <h1>my Name is <span className="name">{name} {lname} </span> </h1>
    <h1 style={{color:"green"}}> Today date is {date}</h1>
    <h1 style={mystyle} >current time is {time}</h1>

    <img src={img1} alt="photo" />
    <img src={img2} alt="photo" /> */}

    <App/>
    


  </>

  , document.getElementById("root")
)

