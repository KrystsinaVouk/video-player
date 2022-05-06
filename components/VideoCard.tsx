import React from 'react';
import {Button, Grid, Typography} from "@material-ui/core";
import {useRouter} from "next/router";
// @ts-ignore
import styles from '../styles/VideoCard.module.scss'

const VideoCard = ({videoInfo}) => {
    const {push} = useRouter();

    return (
        <Grid className={styles.videoCardGrid}>
            <Button
                variant={"outlined"}
                className={styles.comeBackBtn}
                onClick={() => push('/')}
            >
                Come back to the videos
            </Button>
            <Grid container className={styles.videoCardDescriptionGrid}>
                <img
                    alt={videoInfo.Title}
                    src={videoInfo.MediaAgeRestrictionImageUrl}
                    width={200}
                    height={200}
                />
                <div>
                    <Typography variant={'h5'}>{videoInfo.Title}</Typography>
                    <Typography variant={'h6'}>Media Type - {videoInfo.MediaTypeDisplayName}</Typography>
                    <Typography variant={'h6'}>Year - {videoInfo.Year}</Typography>
                </div>
            </Grid>
            <Typography variant={'h5'}>Description</Typography>
            <Typography variant={'body1'}>{videoInfo.Description}</Typography>
        </Grid>
    );
};

export default VideoCard;
