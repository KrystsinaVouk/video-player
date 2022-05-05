import React, {useEffect} from 'react';
import {Box, CircularProgress, Grid} from "@material-ui/core";
import VideoItem from "./VideoItem";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {useRouter} from "next/router";
import MainLayout from "../layouts/MainLayout";

interface VideoListProps {
    mediaListId: number
}

const VideoList: React.FC<VideoListProps> = ({mediaListId}) => {

    const {videos, error} = useTypedSelector(state => state.video);
    const {fetchVideos, fetchPlayerInfo} = useActions();
    const router = useRouter();

    useEffect(  () => {
        try {
            const fetchData = async () => {
                await fetchVideos(mediaListId);
                await fetchPlayerInfo(15, "TRIAL");
            }
            fetchData();
        } catch (e) {
            router.push('/404');
        }
    }, [mediaListId])

    if (error) {
        return (
            <MainLayout>
                {error}
            </MainLayout>
        )
    }

    if (Object.keys(videos).length === 0) {
        return  <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
                    <CircularProgress color="inherit" />
                    <h1>Loading the list of videos...</h1>
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
