import { SET_POLLS } from "../actionTypes";


export const polls = (state = {}, action: any) => {
    switch(action.type){
        case SET_POLLS:
            return action.polls
        default:
            return state
    }
}