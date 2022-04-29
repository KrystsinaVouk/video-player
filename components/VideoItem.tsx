import React from 'react';
import {IVideo} from "../types/video";
import {Card} from "@material-ui/core";
import styles from "../styles/VideoItem.module.scss"

interface IVideoItemProps {
    video: IVideo;
    active?: boolean
}

const VideoItem: React.FC<IVideoItemProps> = ({video, active}) => {
    return (
        <Card className={styles.video}>
            {video.text}
        </Card>
    );
};

export default VideoItem;
