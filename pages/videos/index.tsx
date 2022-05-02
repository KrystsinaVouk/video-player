import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Grid, Card, Box} from "@material-ui/core";
import {useRouter} from "next/router";
import {IVideo} from "../../types/video";
import VideoList from "../../components/VideoList";

function Index() {
    const videos: IVideo[] = [{
        Id: 15,
        Guid: "6e6a86e5-356f-4795-8998-305e1b202536",
        MediaTypeCode: "VOD",
        MediaTypeDisplayName: "VOD",
        MediaAgeRestrictionValueMin: 16,
        MediaAgeRestrictionImageUrl: "https://pegi.info/sites/default/files/styles/medium/public/2017-03/pegi16.png",
        Title: "Top Gun \nMAVERICK",
        Description: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing \nthe envelope as a courageous test pilot and dodging\nthe advancement in rank that would ground him.",
        Year: 2015,
        Duration: 5040000,
        IsTrialContentAvailable: false,
        AvailableFrom: "2021-02-01T21:19:48+00:00",
        Images: [
            {
                Id: 16,
                MediaId: 15,
                PlatformCode: "ANY",
                ImageTypeCode: "COVER",
                Url: "https://d1n3vpqjhjvv6k.cloudfront.net:443/Asset/6e6a86e5356f47958998305e1b202536/Images/170c614505b540b988bbb81a7183f4bc",
                Width: 0,
                Height: 0
            }
        ],
        Products: [{Id: 15}]
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
