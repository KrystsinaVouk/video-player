import React, {useEffect, useRef} from 'react';
import {Pause, PlayArrow, VolumeUp} from "@material-ui/icons";
import {Grid, IconButton} from "@material-ui/core";
// @ts-ignore
import styles from "../styles/Player.module.scss"
import VideoProgress from "./VideoProgress";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import ReactPlayer from "react-player";
import {setVolume} from "../store/action-creators/player";


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
        Duration: 52,
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

    const {pause, active, duration, currentTime, volume} = useTypedSelector(state => state.player)
    const {playVideo, pauseVideo, setVolume, setCurrentTime, setDuration, setActive} = useActions();
    const playerRef = useRef<React.RefObject<HTMLMediaElement> | null>();

    useEffect(() => {
        console.log(playerRef.current.props);
    }, [])

    const onPlay = () => {
        if (pause) {
            playVideo();
        } else {
            pauseVideo()
        }
    }
    const onReady = () => {
        console.log(playerRef.current.player.isPlaying, !pause);
        setDuration(video.Duration)
    }
    const changeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(Number(event.target.value));
    }

    const changeCurrentTime = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setCurrentTime(Number(event.target.value));
        playerRef.current.player.seekTo(Number(event.target.value));
    }
    const onChangeProgress = ({played, playedSeconds}) => {
        setCurrentTime(playedSeconds);
        playerRef.current.player.seekTo(playedSeconds);
    }

    return (
        <Grid container direction={"column"}>

            <ReactPlayer
                ref = {playerRef}
                url = 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
                playing = {!pause}
                volume = {volume / 100}
                duration = {duration}
                played = {currentTime}
                onReady = {onReady}
                onProgress = {onChangeProgress}
                onSeek={e => console.log('onSeek', e)}
            />

            <div className={styles.player}>
                <IconButton onClick={onPlay}>
                    {pause ? <PlayArrow/> : <Pause/>}
                </IconButton>
                <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                    <div>{video.Title}</div>
                    <div style={{fontSize: 12, color: 'gray'}}>{video.MediaTypeDisplayName}</div>
                </Grid>
                <VideoProgress left={currentTime} right={duration} onChange={changeCurrentTime}/>
                <VolumeUp style={{marginLeft: 'auto'}}/>
                <VideoProgress left={volume} right={100} onChange={changeVolume}/>
            </div>
        </Grid>
    )

}

export default Player;
