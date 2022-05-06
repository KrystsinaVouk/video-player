import React, {useEffect} from 'react';
import {useRouter} from "next/router";

import MainLayout from "../../layouts/MainLayout";
import Player from "../../components/Player";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import VideoCard from "../../components/VideoCard";


const VideoPage = () => {
    const {query, push} = useRouter();
    const {active} = useTypedSelector(state => state.player);


    useEffect(()=> {
        if (!active) {
            push('/');
        }
    }, [])

    if (!active) {
        return <></>;
    } else {
        return (
            <MainLayout title={active.Title} description={active.Description}>
                <VideoCard videoInfo={active} />
                <Player streamType={query.streamType} />
            </MainLayout>
        );
    }
};

export default VideoPage;
