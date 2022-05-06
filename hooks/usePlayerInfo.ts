import React, {useEffect, useRef} from 'react';
import {useTypedSelector} from "./useTypedSelector";
import {useActions} from "./useActions";
import {useDispatch} from "react-redux";
import {NextThunkDispatch} from "../store";
import {fetchPlayerInfo} from "../store/action-creators/player";

export const usePlayerInfo = (streamType:string) => {

    const playerRef = useRef<React.RefObject<HTMLMediaElement> | null>();
    const {playerInfo, error, pause, active, duration, currentTime, volume} = useTypedSelector(state => state.player)
    const {playVideo, pauseVideo, setVolume, setCurrentTime, setDuration} = useActions();
    const onPlay = () => pause ? playVideo() : pauseVideo();
    const dispatch = useDispatch() as NextThunkDispatch;

    const onReady = () => {
        setDuration(52)
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
                await dispatch(fetchPlayerInfo(active.Id, streamType));
            };
            fetchData();
        } catch (e) {
            console.log(e);
        }
    }, []);


    return {
        playerRef,
        pause,
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
    };
}
