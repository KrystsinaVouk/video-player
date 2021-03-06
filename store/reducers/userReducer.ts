import {IUserState, UserAction, UserActionTypes} from "../../types/user";

const initialState: IUserState = {
    user: null,
    error: ''
}
export const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER:
            return {user: action.payload, error: ''}
        case UserActionTypes.FETCH_USER_ERROR:
            return {...state, error: action.payload}
        case UserActionTypes.REMOVE_USER:
            return {user: null, error: ''}
        default:
            return state;
    }
}
