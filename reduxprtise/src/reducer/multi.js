const initialState = 5

const changeTheNumber = (state = initialState, action) => {
    if (action.type == "MULTI") {
        return state * action.payload
    }

    else if (action.type == "DIVIDE") {
        if (state >= 1) {
            return state / action.payload
        }
    }
    return state
}


export default changeTheNumber