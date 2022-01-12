import { SET_CURRENT_USER, CREATE_USER } from "../actionTypes";

const DEFAULT_STATE = {
    isAuth: false,
    user: {}
}

const auth = (state = DEFAULT_STATE, action: any) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                isAuth: !!Object.keys(action.user).length,
                user: action.user
            }
        default:
            return state;
    }
}


export const createUser = (state = DEFAULT_STATE, action: any) => {
    switch(action.type){
        case CREATE_USER:
            return{
                isAuth: !!Object.keys(action.user).length,
                user: action.user
            }
        default:
            return state
    }
}
export default auth;