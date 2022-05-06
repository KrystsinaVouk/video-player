import {useInput} from "./useInput";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {NextThunkDispatch} from "../store";
import {fetchUser} from "../store/action-creators/user";
import {IUserRequestBody} from "../types/user";
import {useState} from "react";

export const useLogin = () => {
    const username = useInput("");
    const password = useInput("");
    const [errorText, setErrorText] = useState('');
    const router = useRouter();
    const dispatch = useDispatch() as NextThunkDispatch;


    const isDisabled = !(!!username.value && !!password.value);
    const userBody  = () : IUserRequestBody => {
        return {
            Username: username.value,
            Password: password.value,
            Device: {
                PlatformCode: "WEB",
                Name: "7a6a86e5-356f-4795-8998-305e1b205531",
            },
        };
    };

    const login = async (event) => {
        event.preventDefault();
        if (!username.value || !password.value) {
            setErrorText('Incorrect value');
            return;
        }
        await dispatch(fetchUser(userBody()));
        await router.push("/");
    };

    return {
        username,
        password,
        errorText,
        isDisabled,
        login
    }
}
