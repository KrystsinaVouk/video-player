import {Dispatch} from "react";
import {http} from "../../config/http";
import {IUserRequestBody, IUserResponse, UserAction, UserActionTypes} from "../../types/user";
import {endpoints} from "../../enums/endpoints";
import {errorMessage} from "../../enums/errorMessages";

export const fetchUser = (userBody: IUserRequestBody) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const { data } = await http.post<IUserRequestBody, IUserResponse>(
                endpoints.SIGN_IN,
                userBody
            )
            dispatch({
                type: UserActionTypes.FETCH_USER,
                payload: data
            })

        } catch (error) {
            dispatch({
                type: UserActionTypes.FETCH_USER_ERROR,
                payload: errorMessage.FETCH_USER
            })
        }
    }
}

export const removeUser = (): UserAction => {
    return {type: UserActionTypes.REMOVE_USER};
}
