import React from 'react';
import ReactPlayer from "react-player";
import {Pause, PlayArrow, VolumeUp} from "@material-ui/icons";
import {Grid, IconButton, Typography} from "@material-ui/core";
import VideoProgress from "./VideoProgress";
// @ts-ignore
import styles from "../styles/Player.module.scss"
import MainLayout from "../layouts/MainLayout";
import Loader from "./Loader";
import {usePlayerInfo} from "../hooks/usePlayerInfo";

function Player({streamType}) {

    const { pause,
            playerRef,
            error,
            playerInfo,
            duration,
            currentTime,
            onReady,
            onChangeProgress,
            onPlay,
            changeCurrentTime,
            volume,
            changeVolume
        } = usePlayerInfo(streamType);

 /*   const handleClickFullscreen = () => {
        screenfull.request(findDOMNode(playerRef))
    }*/

    if (error) {
        return (
            <MainLayout>
                <Typography color={'secondary'} variant={'h5'}>{error}</Typography>
            </MainLayout>
        )
    }

    if (!playerInfo) {
       return (
           <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
               <Loader color={'papayawhip'}>Loading the player...</Loader>
           </Grid>
       )
    } else {
        return (
            <Grid container direction={"column"} className={styles.video}>
                <ReactPlayer
                    ref = {playerRef}
                    url = {'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'}
                   /* url = {playerInfo.ContentUrl}*/
                    width='100%'
                    height='100%'
                    playing = {!pause}
                    volume = {volume / 100}
                    duration = {duration}
                    played = {currentTime}
                    onReady = {onReady}
                    onProgress = {onChangeProgress}
                    style={{display:'contents',  width: '100%'}}
                />

                <div className={styles.player}>
                    <IconButton onClick={onPlay}>
                        {pause ? <PlayArrow/> : <Pause/>}
                    </IconButton>
                    <Grid container direction="column" className={styles.playerInfoGrid}>
                        <Typography variant={"body1"}>{playerInfo.Title}</Typography>
                        <Typography variant={"body2"}>{playerInfo.MediaTypeDisplayName}</Typography>
                    </Grid>
                    <VideoProgress
                        left={Math.ceil(currentTime)}
                        right={duration}
                        onChange={changeCurrentTime}
                        width={700}
                        sec={'seconds'}
                    />
                    <VolumeUp className={styles.volume}/>
                    <VideoProgress
                        left={volume}
                        right={100}
                        onChange={changeVolume}
                    />
                </div>
            </Grid>
        )
    }
}

export default Player;
