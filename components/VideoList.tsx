import React, {useEffect} from 'react';
import {Box, Grid} from "@material-ui/core";
import VideoItem from "./VideoItem";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {useRouter} from "next/router";
import MainLayout from "../layouts/MainLayout";

interface VideoListProps {
    mediaListIds: number[]
}

const VideoList: React.FC<VideoListProps> = ({mediaListIds}) => {

    const {videos, error} = useTypedSelector(state => state.video);
    const {fetchVideos} = useActions();
    const router = useRouter();

    // @ts-ignore
    useEffect( () => {
        try {
            mediaListIds.forEach(value => {
                fetchVideos(value, localStorage.getItem('token'))
            })
        } catch (e) {
            router.push('/404');
        }
    }, [mediaListIds])

    if (error) {
        return <MainLayout>
            {error}
        </MainLayout>
    }

    return (
        <>
            <Grid container direction="column">
                <Box p={2}>
                    {videos.firstList.map(video =>
                        <VideoItem key={video.Guid} video={video}/>
                    )}
                </Box>
            </Grid>
            <Grid container direction="column">
                <Box p={2}>
                    {videos.secondList.map(video =>
                        <VideoItem key={video.Guid} video={video}/>
                    )}
                </Box>
            </Grid>
        </>

    );
};

export default VideoList;
