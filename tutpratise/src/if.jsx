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


export { slotM }

