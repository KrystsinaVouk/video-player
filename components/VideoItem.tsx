import React from 'react';
import {IVideo} from "../types/video";
import {Card, Grid, IconButton} from "@material-ui/core";
// @ts-ignore
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
        <Card className={styles.video} onClick={()=>router.push(`/videos/${video.Guid}`)}>
            <IconButton onClick={e => e.stopPropagation()}>
                {active ? <Pause /> : <PlayArrow />}
            </IconButton>
            <img width={70} height={70} alt="video image" src={video.MediaAgeRestrictionImageUrl}/>
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                <div>{video.Title}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{video.MediaTypeDisplayName}</div>
            </Grid>
            {active && <div>02:42 / 03:22</div>}
            <IconButton onClick={e => e.stopPropagation()} style={{marginLeft: 'auto'}}>
                <Delete/>
            </IconButton>
        </Card>
    );
};

export default VideoItem;
