import React from 'react';
import {IVideo} from "../types/video";
import {Card, Grid} from "@material-ui/core";
// @ts-ignore
import styles from "../styles/VideoItem.module.scss"
import {useRouter} from "next/router";
import {useActions} from "../hooks/useActions";

interface IVideoItemProps {
    video: IVideo;
}

const VideoItem: React.FC<IVideoItemProps> = ({video}) => {
    const {setActive} = useActions();
    const router = useRouter();

    const onClickVideo = () => {
        setActive(video);
        router.push(`/videos/${video.MediaId}`);
    }

    return (
        <Card className={styles.video} onClick={onClickVideo}>
            <img width={70} height={70} alt="video image" src={`https://pegi.info/sites/default/files/styles/medium/public/2017-03/pegi16.png`}/>
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                <div>{video.Title}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{video.MediaTypeDisplayName}</div>
            </Grid>
        </Card>
    );
};

export default VideoItem;
