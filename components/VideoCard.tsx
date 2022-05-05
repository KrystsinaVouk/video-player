import React from 'react';
import {Button, Grid, Typography} from "@material-ui/core";
import {useRouter} from "next/router";

const VideoCard = ({videoInfo}) => {
    const {push} = useRouter();

    return (
        <Grid style={{background:'papayawhip', margin:'100px 100px 10px', padding:20, borderRadius:'2%'}}>
            <Button
                variant={"outlined"}
                style={{fontSize: 10}}
                onClick={() => push('/')}
            >
                Come back to the videos
            </Button>
            <Grid container style={{margin: '10px 0'}}>
                <img alt={videoInfo.Title} src={videoInfo.MediaAgeRestrictionImageUrl} width={200} height={200}/>
                <div style={{marginLeft: 30}}>
                    <Typography variant={'h3'}>{videoInfo.Title}</Typography>
                    <Typography variant={'h6'}>Media Type - {videoInfo.MediaTypeDisplayName}</Typography>
                    <Typography variant={'h6'}>Year - {videoInfo.Year}</Typography>
                </div>
            </Grid>
            <Typography variant={'h4'}>Description</Typography>
            <Typography variant={'h6'}>{videoInfo.Description}</Typography>
        </Grid>
    );
};

export default VideoCard;
