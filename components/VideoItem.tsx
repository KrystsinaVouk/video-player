import React from 'react';
import {IVideo} from "../types/video";
import {Card, Grid, IconButton} from "@material-ui/core";
import styles from "../styles/VideoItem.module.scss"
import {Delete, Pause, PlayArrow} from "@material-ui/icons";
import {useRouter} from "next/router";

interface IVideoItemProps {
    video: IVideo;
    active?: boolean
}

const VideoItem: React.FC<IVideoItemProps> = ({video, active}) => {
    const router = useRouter();
    return (
        <Card className={styles.video} onClick={()=>router.push(`/videos/${video.id}`)}>
            <IconButton onClick={e => e.stopPropagation()}>
                {active ? <Pause /> : <PlayArrow />}
            </IconButton>
            <img width={70} height={70} alt="video image" src={video.picture}/>
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                <div>{video.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{video.artist}</div>
            </Grid>
            {active && <div>02:42 / 03:22</div>}
            <IconButton onClick={e => e.stopPropagation()} style={{marginLeft: 'auto'}}>
                <Delete/>
            </IconButton>
        </Card>
    );
};

export default VideoItem;
