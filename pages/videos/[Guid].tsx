import React from 'react';
import {Button, Grid} from "@material-ui/core";
import MainLayout from "../../layouts/MainLayout";
import {useRouter} from "next/router";

const VideoPage = () => {
    const router = useRouter();
    const video = {
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
    };

    return (
        <MainLayout>
            <Button
                variant={"outlined"}
                style={{fontSize: 32}}
                onClick={() => router.push('/videos')}
            >
                Come back to the videos
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img alt={video.Title} src={video.MediaAgeRestrictionImageUrl} width={200} height={200}/>
                <div style={{marginLeft: 30}}>
                    <h1>{video.Title}</h1>
                    <h3>Media Type - {video.MediaTypeDisplayName}</h3>
                    <h3>Year - {video.Year}</h3>
                </div>
            </Grid>
            <h1>Description</h1>
            <p>{video.Description}</p>
        </MainLayout>
    );
};

export default VideoPage;
