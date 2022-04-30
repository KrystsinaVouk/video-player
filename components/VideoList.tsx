import React from 'react';
import {IVideo} from "../types/video";
import {Box, Grid} from "@material-ui/core";
import VideoItem from "./VideoItem";

interface VideoListProps {
    videos: IVideo[]
}

const VideoList: React.FC<VideoListProps> = ({videos}) => {
    return (
        <Grid container direction="column">
            <Box p={2}>
                {videos.map(video =>
                    <VideoItem key={video.id} video={video} active={false}/>
                )}
            </Box>

        </Grid>
    );
};

export default VideoList;
