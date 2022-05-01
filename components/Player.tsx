import React from 'react';
import {Pause, PlayArrow, VolumeUp} from "@material-ui/icons";
import {Grid, IconButton} from "@material-ui/core";
// @ts-ignore
import styles from "../styles/Player.module.scss"
import VideoProgress from "./VideoProgress";

function Player() {
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

    const active = false;

    return (
        <div className={styles.player}>
            <IconButton onClick={e => e.stopPropagation()}>
                {active ? <Pause /> : <PlayArrow />}
            </IconButton>
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                <div>{video.Title}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{video.MediaTypeDisplayName}</div>
            </Grid>
            <VideoProgress left={0} right={100} onChange={()=>({})} />
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <VideoProgress left={0} right={100} onChange={()=>({})} />
        </div>
    );
}

export default Player;
