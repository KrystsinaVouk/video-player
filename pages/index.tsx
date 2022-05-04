import React, {useEffect} from "react";
import {Grid} from "@material-ui/core";
import {useRouter} from "next/router";

import Login from "./login";
import MainLayout from "../layouts/MainLayout";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAppContext} from "../components/AppWrapper";
// @ts-ignore
import styles from "../styles/Index.module.scss"


export default function Index() {

    const {isAuth} = useAppContext();
    const {user, error} = useTypedSelector(state => state.user);
    const router = useRouter();

    useEffect(() => {
        if (user) {
            localStorage.setItem('token', user.AuthorizationToken.Token);
            router.push('/videos/');
        } else {
            router.push('/login');
        }
    }, [user, isAuth]);

    return (!isAuth) ?
        <Login/> :
        (<>
            <MainLayout>
                <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
                    <Grid className={styles.center}>
                        <h1>Welcome! <strong>{user.User.FullName}</strong></h1>
                        <h3>Here all the best videos go!</h3>
                    </Grid>
                </Grid>
            </MainLayout>
        </>)
}
