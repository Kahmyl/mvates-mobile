import { Dispatch } from "redux";
import { SET_POLLS } from "../actionTypes";
import { getPolls, votePoll } from "../../services/request";
import { pollData, voteData } from "../../services/types";

export const setPolls = (polls: any) => ({
    type: SET_POLLS,
    polls
})

export const loadPolls = () => {
    return async (dispatch: Dispatch) => {
        try{
            const{...polls} = await getPolls()
            dispatch(setPolls(polls))
        }catch(err: any){
            console.log(err.message)
        }
    }
}