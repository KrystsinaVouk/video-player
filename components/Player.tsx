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
            <Grid container direction={"column"} style={{
                margin:100,
                width: '82%',
                height: 550,
                boxShadow:'0 5px 5px rgba(255,255,255,.6)'
            }}>
                <ReactPlayer
                    ref = {playerRef}
                   url = {'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'}
                   /* url = {playerInfo.ContentUrl}*/
                    playing = {!pause}
                    volume = {volume / 100}
                    duration = {duration}
                    played = {currentTime}
                    onReady = {onReady}
                    onProgress = {onChangeProgress}
                    style={{display:'contents'}}
                />

                <div className={styles.player}>
                    <IconButton onClick={onPlay}>
                        {pause ? <PlayArrow/> : <Pause/>}
                    </IconButton>
                    <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                        <div>{playerInfo.Title}</div>
                        <div style={{fontSize: 12, color: 'gray'}}>{playerInfo.MediaTypeDisplayName}</div>
                    </Grid>
                    <VideoProgress
                        left={Math.ceil(currentTime)}
                        right={duration}
                        onChange={changeCurrentTime}
                        width={700}
                        sec={'seconds'}
                    />
                    <VolumeUp style={{marginLeft: 'auto'}}/>
                    <VideoProgress
                        left={volume}
                        right={100}
                        onChange={changeVolume}/>
                </div>
            </Grid>
        )
    }
}

export default Player;
