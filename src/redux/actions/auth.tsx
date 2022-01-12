import { Dispatch } from "redux";
import { SET_CURRENT_USER, CREATE_USER } from "../actionTypes";
import { authLogin, logout, register } from '../../services/request'
import { loginData, registerData } from "./types";

export const setCurrentUser = (user: any) => ({
    type: SET_CURRENT_USER,
    user
})

export const setUser = (user: any) => ({
    type: CREATE_USER,
    user
})

export const loginUser = (data: loginData) => {
    return async (dispatch: Dispatch) => {
        try{
            const {...user} = await authLogin(data)
            dispatch(setCurrentUser(user))
        }catch(err: any){
            console.log(err.message)
        }
    }
}

export const registerUser = (data: registerData) => {
    return async (dispatch: Dispatch) => {
        try{
            const {...user} = await register(data)
            dispatch(setUser(user))
        }catch(err: any){
            console.log(err.message)
        }
    }
}

export const logoutUser = () => {
    const user = {}
    return async (dispatch: Dispatch) => {
        try{
            await logout()
            dispatch(setCurrentUser(user))
        }catch(err: any){
            console.log(err.message)
        }
    }
}