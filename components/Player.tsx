import React from 'react';
import ReactPlayer from "react-player";
import {Fullscreen, FullscreenExit, Pause, PlayArrow, VolumeUp} from "@material-ui/icons";
import {Grid, IconButton, Typography} from "@material-ui/core";
import {FullScreen} from "react-full-screen";
import VideoProgress from "./VideoProgress";
import Loader from "./Loader";
import MainLayout from "../layouts/MainLayout";
import {usePlayerInfo} from "../hooks/usePlayerInfo";
// @ts-ignore
import styles from "../styles/Player.module.scss"


function Player({streamType}) {

    const {
        playerRef,
        pause,
        isfullScreen,
        handle,
        onHandleFullScreen,
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
                <Typography color="secondary" variant="h5">{error}</Typography>
            </MainLayout>
        )
    }

    if (!playerInfo) {
        return (
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Loader color="papayawhip">Loading the player...</Loader>
            </Grid>
        )
    } else {
        return (
            <Grid container direction="column" className={styles.video}>
                <div>
                    <FullScreen handle={handle}>
                        <ReactPlayer
                            ref={playerRef}
                            url={'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'}
                            /* url = {playerInfo.ContentUrl}*/
                            playing={!pause}
                            volume={volume / 100}
                            duration={duration}
                            played={currentTime}
                            onReady={onReady}
                            onProgress={onChangeProgress}
                            style={{display: 'contents', width: '100%'}}
                        />

                        <div className={styles.player}>
                            <IconButton onClick={onPlay}>
                                {pause ? <PlayArrow/> : <Pause/>}
                            </IconButton>
                            <Grid container direction="column" className={styles.playerInfoGrid}>
                                <Typography variant="body1">{playerInfo.Title}</Typography>
                                <Typography gutterBottom variant="body2">{playerInfo.MediaTypeDisplayName}</Typography>
                            </Grid>
                            <VideoProgress
                                left={Math.ceil(currentTime)}
                                right={duration}
                                onChange={changeCurrentTime}
                                width={700}
                                sec="seconds"
                            />
                            <IconButton
                                className={styles.fullScreenBtn}
                                onClick={onHandleFullScreen}>
                                {isfullScreen ? <FullscreenExit/> : <Fullscreen/>}
                            </IconButton>
                            <VolumeUp/>
                            <VideoProgress
                                left={volume}
                                right={100}
                                onChange={changeVolume}
                            />
                        </div>
                    </FullScreen>
                </div>
            </Grid>
        )
    }
}

export default Player;
