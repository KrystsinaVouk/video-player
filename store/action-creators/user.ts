import {Dispatch} from "react";
import { http } from "../../config/http";
import {endpoints} from "../../config/endpoints";
import {IUserRequestBody, IUserResponse, UserAction, UserActionTypes} from "../../types/user";
import {errorMessage} from "../../config/errorMessages";

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
