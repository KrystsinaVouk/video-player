import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Grid, Card, Box} from "@material-ui/core";
import VideoList from "../../components/VideoList";

function Index() {
    return (
        <MainLayout>
            <Grid container justifyContent="center">
                <Card style={{width: 900, padding: 20, background: 'darkgrey', opacity: 0.7}}>
                    <Box>
                        <Grid container justifyContent="space-between">
                            <h1>Videos</h1>
                        </Grid>
                    </Box>
                    <Grid container direction={"row"} wrap={'nowrap'}>
                       <VideoList mediaListIds={[2,4]} />
                    </Grid>
                </Card>
            </Grid>
        </MainLayout>

    );
}

export default Index;

/*export const getServerSideProps = wrapper.getServerSideProps(async({res, store}) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    console.log(store.getState());
    console.log(localStorage.getItem('token'));
    //const response = await dispatch(await fetchVideos(store.getState().user.user.AuthorizationToken.Token));
    return {
        props: {},
    }
})*/
