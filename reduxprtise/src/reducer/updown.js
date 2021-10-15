const initialState = 0

const mulTheNumber = (state = initialState, action) => {
    if (action.type == "INCREMENT") {
        return state + action.payload
    }
    else if (action.type == "DECREMENT") {
        if (state >= 1) {
            return state - action.payload
        }
    }
    return state
}


export default mulTheNumber


