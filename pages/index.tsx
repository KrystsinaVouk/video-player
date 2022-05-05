import React, {useEffect} from "react";
import {Grid, Typography} from "@material-ui/core";
import {useRouter} from "next/router";

import MainLayout from "../layouts/MainLayout";
import {useTypedSelector} from "../hooks/useTypedSelector";
import VideoList from "../components/VideoList";
// @ts-ignore
import styles from "../styles/Index.module.scss"

export default function Index() {

    const {user} = useTypedSelector(state => state.user);
    const { push } = useRouter();

    useEffect(() => {
        if (!user) {
            push('/login');
        } else {
            localStorage.setItem('token', user.AuthorizationToken.Token);
        }
    }, [user]);

    if (!user) {
        return <></>
    } else {
        return  (
            <MainLayout>
                <Grid className={styles.videoListContainer}>
                    <Grid container direction={"column"} justifyContent={"center"} alignItems="center">
                        <Typography variant={'h3'}>Welcome! <strong>{user.User.FullName}</strong></Typography>
                        <Typography variant={'h5'}>Here all the best videos go!</Typography>
                    </Grid>
                    <Grid container direction={"row"} wrap={'nowrap'}>
                        {[2,4].map(key => <VideoList mediaListId={key} key={key} />)}
                    </Grid>
                </Grid>
            </MainLayout>
        )
    }
}
