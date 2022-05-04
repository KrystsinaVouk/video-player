import React, {useRef} from 'react';
import ReactPlayer from "react-player";
import {Pause, PlayArrow, VolumeUp} from "@material-ui/icons";
import {CircularProgress, Grid, IconButton} from "@material-ui/core";
import VideoProgress from "./VideoProgress";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
// @ts-ignore
import styles from "../styles/Player.module.scss"


function Player() {
    const playerRef = useRef<React.RefObject<HTMLMediaElement> | null>();
    const {pause, active, duration, currentTime, volume} = useTypedSelector(state => state.player)
    const {playVideo, pauseVideo, setVolume, setCurrentTime, setDuration} = useActions();

    const onPlay = () => pause ? playVideo() : pauseVideo();

    const onReady = () => {
        setDuration(52)
    }
    const changeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(Number(event.target.value));
    }
    const changeCurrentTime = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTime(Number(event.target.value));
        playerRef.current.player.seekTo(Number(event.target.value));
    }
    const onChangeProgress = ({playedSeconds}) => {
        setCurrentTime(playedSeconds);
    }

    return (
        <Grid container direction={"column"} style={{
            margin:100,
            width:'fit-content',
            boxShadow: '5px 5px 5px 5px rgba(255,255,255)'
        }}>
            <ReactPlayer
                ref = {playerRef}
                url = {'https://media.w3.org/2010/05/sintel/trailer_hd.mp4' }
                playing = {!pause}
                volume = {volume / 100}
                duration = {duration}
                played = {currentTime}
                onReady = {onReady}
                onProgress = {onChangeProgress}
                fallback={<CircularProgress color="inherit" />}
                style={{display:'contents'}}
            />

            <div className={styles.player}>
                <IconButton onClick={onPlay}>
                    {pause ? <PlayArrow/> : <Pause/>}
                </IconButton>
                <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                    <div>{active.Title}</div>
                    <div style={{fontSize: 12, color: 'gray'}}>{active.MediaTypeDisplayName}</div>
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

export default Player;
