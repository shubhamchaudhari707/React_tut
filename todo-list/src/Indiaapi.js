import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Indiaapi = () => {

    const [covid, setCovid] = useState([])
    async function covindData() {
        try {

            const data = await fetch("https://api.covid19india.org/data.json")
            // console.log(data)

            const jsondat = await data.json()
            // console.log(jsondat.statewise)

            setCovid(jsondat.statewise)

        }

        catch (err) {
            console.log(err)
        }

    }

    covindData()

    return (
        <>

            <h1 className="text-center" style={{ color: "red" }}>INDIA Covid-19 Dashbord</h1>
            <table className="table table-hover container mt-5">
                <thead className="thead-dark">
                    <tr >
                        <th scope="col">Id</th>
                        <th scope="col">State</th>
                        <th scope="col">Confirmed</th>
                        <th scope="col">Recovered</th>
                        <th scope="col">Deaths</th>
                        <th scope="col">Active</th>
                        <th scope="col">Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        covid.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{value.state}</td>
                                    <td>{value.confirmed}</td>
                                    <td>{value.recovered}</td>
                                    <td>{value.deaths}</td>
                                    <td>{value.active}</td>
                                    <td>{value.lastupdatedtime}</td>

                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>


        </>
    )
}

export default Indiaapi
