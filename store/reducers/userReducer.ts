import {UserAction, UserActionTypes} from "../../types/user";

const initialState = {
    user: null,
    error: ''
}
export const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER:
            return {user: action.payload, error: ''}
        case UserActionTypes.FETCH_USER_ERROR:
            return {...state, error: action.payload}
        default:
            return state;
    }
}
