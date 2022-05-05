import React, {useEffect} from 'react';
import {Box, Grid, Typography} from "@material-ui/core";
import VideoItem from "./VideoItem";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import MainLayout from "../layouts/MainLayout";
import Loader from "./Loader";

interface VideoListProps {
    mediaListId: number
}

const VideoList: React.FC<VideoListProps> = ({mediaListId}) => {

    const { videos, error } = useTypedSelector(state => state.video);
    const { fetchVideos } = useActions();

    useEffect(  () => {
        const fetchData = async () => {
            await fetchVideos(mediaListId);
        }
        fetchData();
    }, [mediaListId])

    if (error) {
        return (
            <MainLayout>
                <Typography color={'secondary'} variant={'h5'}>{error}</Typography>
            </MainLayout>
        )
    }

    if (Object.keys(videos).length === 0) {
        return  <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
                    <Loader color={'#141e30'}>
                        Loading the list of videos...
                    </Loader>
                </Grid>
    } else {
        return (
                <Grid container direction="column">
                    <Box p={2}>
                        {videos[mediaListId]?.map(video =>
                            <VideoItem key={video.Id} video={video}/>
                        )}
                    </Box>
                </Grid>
        );
    }
};

export default VideoList;
