import React, {useEffect, useRef} from 'react';
import {useTypedSelector} from "./useTypedSelector";
import {useActions} from "./useActions";

export const usePlayerInfo = (streamType:string) => {

    const playerRef = useRef<React.RefObject<HTMLMediaElement> | null>();
    const {playerInfo, error, pause, active, duration, currentTime, volume} = useTypedSelector(state => state.player)
    const {fetchPlayerInfo, playVideo, pauseVideo, setVolume, setCurrentTime, setDuration} = useActions();
    const onPlay = () => pause ? playVideo() : pauseVideo();

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
                await fetchPlayerInfo(active.Id, streamType);
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
