import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Grid, Card, Box} from "@material-ui/core";
import {IVideo} from "../../types/video";
import VideoList from "../../components/VideoList";

function Index() {
    const videos: IVideo[] = [{
        MediaId: 15,
        MediaTypeCode: "VOD",
        MediaTypeDisplayName: "VOD",
        Title: "Top Gun \nMAVERICK",
        Description: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing \nthe envelope as a courageous test pilot and dodging\nthe advancement in rank that would ground him.",
        StreamId: 0,
        Provider: "Internal",
        ContentUrl: "https://cd-stream-od.telenorcdn.net/tnfbaod/SF/585db4b3e4b09db0cf348a64/dash_a1.ism/playlist.mpd"
    }]

    return (
        <MainLayout>
            <Grid container justifyContent="center">
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent="space-between">
                            <h1>Videos</h1>
                        </Grid>
                    </Box>
                    <VideoList videos={videos}/>
                </Card>
            </Grid>
        </MainLayout>
    );
}

export default Index;
