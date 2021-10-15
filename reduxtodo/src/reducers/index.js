import todoReducers from "./reducertodo"
import add from "./addition"

import {combineReducers} from "redux"

const rootReducer = combineReducers({
    todoReducers,
    add
})

export default rootReducer








