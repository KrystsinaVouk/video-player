import React from 'react';
import {Pause, PlayArrow, VolumeUp} from "@material-ui/icons";
import {Grid, IconButton} from "@material-ui/core";
import styles from "../styles/Player.module.scss"
import VideoProgress from "./VideoProgress";

function Player() {
    const video = {
        id: '1',
        name: 'Video 1',
        artist: 'some',
        text: 'some text',
        listens: 10,
        picture: 'https://th.bing.com/th/id/R.1b50867395e05be07f7e98df254c4bdd?rik=LkqDPkXcQRiHBQ&riu=http%3a%2f%2fwww.zastavki.com%2fpictures%2f1680x1050%2f2010%2fAnimals_Cats_Little_Kitten_024152_.jpg&ehk=FDyINAyx3EMo3QTVkI5LCj3QUxQpRQ64TfFhTsEY%2bsM%3d&risl=&pid=ImgRaw&r=0',
        videoURL: 'url'
    }
    const active = false;

    return (
        <div className={styles.player}>
            <IconButton onClick={e => e.stopPropagation()}>
                {active ? <Pause /> : <PlayArrow />}
            </IconButton>
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                <div>{video.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{video.artist}</div>
            </Grid>
            <VideoProgress left={0} right={100} onChange={()=>({})} />
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <VideoProgress left={0} right={100} onChange={()=>({})} />
        </div>
    );
}

export default Player;
