import React from 'react'

const Movies = (props) => {
    return (
        <>
            <div className="cards">

                <div className="card">
                    <img src={props.link} alt="photo" />
                    <div className="card_info">
                        <span>{props.title1}</span>
                        <h3>{props.title}</h3>
                        <a href={props.link1} target="_blank">Youtube</a> <br />
                        <button>Watch Now</button> <br /> <hr />
                    </div>
                </div>


            </div>
        </>
    )
}

export default Movies
