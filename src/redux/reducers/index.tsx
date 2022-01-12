import { combineReducers } from "redux";

import { polls } from "./poll";

const rootReducer = combineReducers({
    polls,
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;