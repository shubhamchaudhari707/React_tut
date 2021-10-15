import React, { useState, useEffect } from 'react'


// to set from local storage
const getLocalItems = () => {
    let list = localStorage.getItem("lists")
    console.log(list)

    if (list) {
        return JSON.parse(localStorage.getItem("lists"))
    }
    else {
        return []
    }
}


const Todos = () => {

    const [inputData, setInputData] = useState("")
    const [items, setItems] = useState(getLocalItems())
    const [toggleSubmit, setToggleSubmit] = useState(true)
    const [iseditItem, setIsedititem] = useState(null)

    const data = (e) => {
        setInputData(e.target.value)
    }


    const addiItem = () => {
        if (!inputData) {
            alert("plzz fill to the property")
        }
        else if (inputData && !toggleSubmit) {
            setItems(
                items.map((ele) => {
                    if (ele.id === iseditItem) {
                        return { ...ele, name: inputData }
                    }
                    return ele
                })
            )

            setToggleSubmit(true)
            setInputData("")
            setIsedititem(null)
        }
        else {
            const appInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, appInputData])
            setInputData("")
        }
    }

    // delete item
    const deleteItem = (index) => {
        // console.log(id)
        const updateItems = items.filter((elem) => {
            return index !== elem.id
        })
        setItems(updateItems)
    }

    // delete all items
    const clearData = () => {
        setItems([])
    }

    // add items local storage
    useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(items))
    }, [items])

    // editItem
    const editItem = (id) => {
        let neweditItem = items.find((ele) => {
            return ele.id == id
        })
        console.log(neweditItem)
        setToggleSubmit(false)
        setInputData(neweditItem.name)
        setIsedititem(id)
    }

    return (

        <>
            <div className="main-div">
                <div className="child-div">

                    <div className="addItems">
                        <input type="text" placeholder="✍ Add Items..." value={inputData} onChange={data} />

                        {
                            toggleSubmit ? <i className="fa fa-plus add-btn" onClick={addiItem} ></i> :
                                <i className="fa fa-edit add-btn" onClick={addiItem} ></i>
                        }

                    </div>

                    <div className="showItems">

                        {
                            items.map((elem) => {
                                return (

                                    <div className="eachItem" key={elem.id} >

                                        <h3>{elem.name}</h3>
                                        <div className="todo-btn">

                                            <i className="far fa-edit add-btn" title="Edit Item" onClick={() => editItem(elem.id)} ></i>
                                            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(elem.id)} ></i>
                                        </div>

                                    </div>

                                )
                            })
                        }

                    </div>

                    {/* clear all button  */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={clearData}><span> CHECK LIST </span> </button>
                    </div>

                </div>
            </div>



        </>
    )
}

export default Todos
