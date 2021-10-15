import React, { useState } from 'react'
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./ImagesMenu"

const ImagesProject = () => {

    const allcatvalues = [...new Set (Menu.map( (curElm)=>{
        return curElm.category
    } ))]
    console.log(allcatvalues)


    const [items, setItems] = useState(Menu)

    const filterItem = (cateItem) => {
        const updateItem = items.filter((curEle) => {
            return curEle.category === cateItem
        })

        setItems(updateItem)
    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order Your favourite dish</h1>
            <hr />
            <div className="manu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    <button className="btn btn-warning" onClick={() => filterItem("breakfast")} > BreakFast</button>
                    <button className="btn btn-warning" onClick={() => filterItem("lunch")} > Lunch</button>
                    <button className="btn btn-warning" onClick={() => filterItem("evening")} > Evening</button>
                    <button className="btn btn-warning" onClick={() => filterItem("dinner")} > Dinner</button>
                    <button className="btn btn-warning" onClick={() => setItems(Menu)} > All</button>
                </div>
            </div>

            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">

                            {
                                items.map((elem) => {
                                    const { id, name, image, description, price } = elem
                                    return (
                                        <>

                                            <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-4 border" key={id}>
                                                <div className="row Item-Inside">
                                                    {/* for images */}
                                                    <div className="col-12 col-md-12 col-lg-4 img-div">
                                                        <img src={image} alt="menupic" className="img-fluid" />
                                                    </div>

                                                    {/* menu items descriptions */}
                                                    <div className="col-12 col-md-12 col-lg-8">
                                                        <div className="main-title pt-4 pb-3">
                                                            <h1>{name}</h1>
                                                            <p>{description}</p>

                                                        </div>
                                                        <div className="menu price book">
                                                            <div className="d-flex justify-content-between ">
                                                                <h2>{price}</h2>
                                                                <a href="">
                                                                    <button className="btn btn-primary">Order Now</button>
                                                                </a>
                                                            </div>
                                                            <p>Prices may On Selected Date.</p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </>
                                    )
                                })
                            }



                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ImagesProject
