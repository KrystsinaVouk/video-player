import React, {useEffect, useRef} from 'react';
import {useFullScreenHandle} from "react-full-screen";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "./useTypedSelector";
import {useActions} from "./useActions";
import {NextThunkDispatch} from "../store";
import {fetchPlayerInfo} from "../store/action-creators/player";
import ReactPlayer from "react-player";

export const usePlayerInfo = (streamType: string) => {
    const dispatch = useDispatch() as NextThunkDispatch;
    const playerRef = useRef<React.RefObject<ReactPlayer> | null>();
    const handle = useFullScreenHandle();

    const {
        playerInfo,
        error,
        pause,
        isfullScreen,
        active,
        duration,
        currentTime,
        volume
    } = useTypedSelector(state => state.player)
    const {
        playVideo,
        pauseVideo,
        enterFullScreen,
        exitFullScreen,
        setVolume,
        setCurrentTime,
        setDuration
    } = useActions();

    const onPlay = () => pause ? playVideo() : pauseVideo();

    const onHandleFullScreen = () => {
        if (!isfullScreen) {
            handle.enter();
            enterFullScreen();
        } else {
            handle.exit();
            exitFullScreen();
        }
    }

    const onReady = () => {
        setDuration(52);
        // setDuration(active.Duration);
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
        const fetchPlayerData = async () => {
            await dispatch(fetchPlayerInfo(active.Id, streamType));
        };

        fetchPlayerData();
    }, []);

    return {
        playerRef,
        pause,
        error,
        isfullScreen,
        handle,
        onHandleFullScreen,
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
