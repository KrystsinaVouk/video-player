import React, {useEffect} from 'react';
import {Box, Grid} from "@material-ui/core";
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
    const {fetchVideos} = useActions();
    const router = useRouter();

    // @ts-ignore
    useEffect( async () => {
        try {
            fetchVideos(mediaListId, localStorage.getItem('token'))
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
        return <h1>Loading...</h1>
    } else {

        return (
                <Grid container direction="column">
                    <Box p={2}>
                        {videos[mediaListId]?.map(video =>
                            <VideoItem key={video.Guid} video={video}/>
                        )}
                    </Box>
                </Grid>
        );
    }
};

export default VideoList;
