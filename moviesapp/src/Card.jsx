import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className="cards">
            
                <div className="card">
                    <img src={props.imgsrc} width="100%" height="500vh" alt="error" />

                    <span className="card_info">{props.title}</span>
                    <h3 className="card_title">{props.title1}</h3>
                    <a href="https://www.netflix.com/in/">
                        <button>Watch Now</button>
                    </a>
                </div>

            </div>

            <hr />
        </>
    )
}

export default Card
