import {useContext, useState} from 'react';
import {AppContext} from "../context";

export function AppWrapper({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const initialState = {
        isAuth : isAuth,
        setIsAuth: setIsAuth
    }

    return (
        <AppContext.Provider value={initialState}>
            {children}
        </AppContext.Provider>
    );
}
export function useAppContext() {
    return useContext(AppContext);
}
