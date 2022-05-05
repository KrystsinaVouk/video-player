import React, {useEffect, useRef} from 'react';
import ReactPlayer from "react-player";
import {Pause, PlayArrow, VolumeUp} from "@material-ui/icons";
import {CircularProgress, Grid, IconButton} from "@material-ui/core";
import VideoProgress from "./VideoProgress";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
// @ts-ignore
import styles from "../styles/Player.module.scss"
import MainLayout from "../layouts/MainLayout";


function Player({mediaId, streamType}) {
    const playerRef = useRef<React.RefObject<HTMLMediaElement> | null>();
    const {playerInfo, error, pause, active, duration, currentTime, volume} = useTypedSelector(state => state.player)
    const {fetchPlayerInfo, playVideo, pauseVideo, setVolume, setCurrentTime, setDuration} = useActions();
    const onPlay = () => pause ? playVideo() : pauseVideo();

    const onReady = () => {
        setDuration(active.Duration)
    }
    const changeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(Number(event.target.value));
    }
    const changeCurrentTime = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTime(Number(event.target.value));
        // @ts-ignore
        playerRef.current.player.seekTo(Number(event.target.value));
    }
    const onChangeProgress = ({playedSeconds}) => {
        setCurrentTime(playedSeconds);
    }

    useEffect(() => {
        try {
            const fetchData = async () => {
                await fetchPlayerInfo(mediaId, streamType);
            };

            fetchData();
        } catch (e) {
           console.log(e);
        }
    }, []);

    if (error) {
        return (
            <MainLayout>
                <h1>{error}</h1>
            </MainLayout>
        )
    }

    if (!playerInfo) {
       return (
           <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
               <CircularProgress color="inherit" />
               <h1>Loading the player...</h1>
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
                    url = {'https://www.youtube.com/watch?v=A0CfYSVzAZI'}
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
