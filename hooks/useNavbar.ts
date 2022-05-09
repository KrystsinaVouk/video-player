import {useRouter} from "next/router";
import {useActions} from "./useActions";
import {useTypedSelector} from "./useTypedSelector";
import * as React from "react";
import {useEffect} from "react";

export const useNavbar = () => {
    const { push } = useRouter()
    const { removeUser } = useActions();
    const {user} = useTypedSelector(state => state.user);

    const menuItems = [
        {text: 'Home', onClick: () => push('/')},
        {text: 'Videos', onClick: () => push('/')},
        {text: 'Sign out',
            onClick: () => {
                removeUser();
                localStorage.removeItem('token');
            }},
    ]

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (user) {
            localStorage.setItem('token', user.AuthorizationToken.Token);
        } else {
            push('/login');
        }
    }, [user]);


    return {
        open,
        handleDrawerOpen,
        handleDrawerClose,
        menuItems
    }
}
