import React from "react";
import {Grid, Typography} from "@material-ui/core";

import MainLayout from "../layouts/MainLayout";
import {useTypedSelector} from "../hooks/useTypedSelector";
import VideoList from "../components/VideoList";
// @ts-ignore
import styles from "../styles/Index.module.scss"

const Index:React.FC = () => {

    const { user } = useTypedSelector(state => state.user);

    return  (
        <MainLayout>
            {user &&
            <Grid className={styles.videoListContainer}>
                <Grid container direction={"column"} justifyContent={"center"} alignItems="center">
                    <Typography variant={'h5'}>Welcome! <strong>{user.User.FullName}</strong></Typography>
                    <Typography variant={'h6'}>Here all the best videos go!</Typography>
                </Grid>
                <Grid container direction={"row"} wrap={'nowrap'}>
                    {[2,4].map(key => <VideoList mediaListId={key} key={key} />)}
                </Grid>
            </Grid>}
        </MainLayout>
    )
}

export default Index;
