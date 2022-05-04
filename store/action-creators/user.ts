import {Dispatch} from "react";
import axios from "axios";
import {IUserBody, UserAction, UserActionTypes} from "../../types/user";

const userRequestBody = {
    Username: "test@bsgroup.eu",
    Password: "Test12!@",
    Device: {
        PlatformCode: "WEB",
        Name: "7a6a86e5-356f-4795-8998-305e1b205531"
    }
}

export const fetchUser = (userBody: IUserBody) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const response = await axios.post(
                'https://thebetter.bsgroup.eu/Authorization/SignIn',
                userBody
            )
            dispatch({
                type: UserActionTypes.FETCH_USER,
                payload: response.data
            })

        } catch (error) {
            dispatch({
                type: UserActionTypes.FETCH_USER_ERROR,
                payload: "The error has been occurred during the login..."
            })
        }
    }
}
