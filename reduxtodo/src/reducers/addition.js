
const initialstate = 0

const add = (state = initialstate, action) => {
    if (action.type == "INCREMENT") {
        return state + 1
    }
    return state
}



export default add