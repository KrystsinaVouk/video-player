import React, {useEffect} from "react";
import {Card, Grid} from "@material-ui/core";
import {useRouter} from "next/router";

import Login from "./login";
import MainLayout from "../layouts/MainLayout";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAppContext} from "../components/AppWrapper";
// @ts-ignore
import styles from "../styles/Index.module.scss"
import VideoList from "../components/VideoList";


export default function Index() {

    const {isAuth} = useAppContext();
    const {user, error} = useTypedSelector(state => state.user);
    const router = useRouter();

    useEffect(() => {
        if (user) {
            localStorage.setItem('token', user.AuthorizationToken.Token);
        } else {
            router.push('/login');
        }
    }, [user, isAuth]);

    return (!isAuth) ?
        <Login/> :
        (<>
            <MainLayout>
                <Card className={styles.center}>
                        <Grid container direction={"column"} justifyContent={"center"} alignItems="center">
                            <h1>Welcome! <strong>{user.User.FullName}</strong></h1>
                            <h3>Here all the best videos go!</h3>
                        </Grid>
                        <Grid container direction={"row"} wrap={'nowrap'}>
                            <VideoList mediaListId={4} />
                            <VideoList mediaListId={2} />
                        </Grid>
                </Card>
            </MainLayout>
        </>)
}

/*export const getServerSideProps = wrapper.getServerSideProps(async({res, store}) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    console.log(store.getState());
    console.log(localStorage.getItem('token'));
    //const response = await dispatch(await fetchVideos(store.getState().user.user.AuthorizationToken.Token));
    return {
        props: {},
    }
})*/
