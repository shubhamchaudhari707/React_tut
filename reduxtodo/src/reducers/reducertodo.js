const initialState = {
    list: []
}

const todoReducers = (state = initialState, action) => {

    if (action.type == "ADD_TODO") {
        const { id, data } = action.payload
        return {
            ...state,
            list: [
                ...state.list,
                {
                    id: id,
                    data: data
                }
            ]
        }
    }

    else if (action.type == "DELETE_TODO") {

        const newlist = state.list.filter((elem) => elem.id !== action.id)

        return {
            ...state,
            list: newlist
        }
    }

    else if (action.type == "REMOVE_TODO") {


        return {
            ...state,
            list: []
        }
    }


    return state
}

export default todoReducers






