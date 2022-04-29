import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Grid, Card, Button, Box} from "@material-ui/core";
import {useRouter} from "next/router";
import {IVideo} from "../../types/video";
import VideoList from "../../components/VideoList";

function Index() {
    const router = useRouter();
    const videos: IVideo[] = [
        {id: '1', name: 'Video 1', artist:'some', text: 'some text', listens: 10, picture: 'src', videoURL: 'url'},
        {id: '2', name: 'Video 1', artist:'some', text: 'some text', listens: 10, picture: 'src', videoURL: 'url'},
        {id: '3', name: 'Video 1', artist:'some', text: 'some text', listens: 10, picture: 'src', videoURL: 'url'},
    ]

    return (
        <MainLayout>
            <Grid container justifyContent="center">
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent="space-between">
                            <h1>Videos</h1>
                            <Button onClick={()=>router.push('/videos/display')}>Load the videos</Button>
                        </Grid>
                    </Box>
                    <VideoList videos={videos}/>
                </Card>
            </Grid>
        </MainLayout>
    );
}

export default Index;
