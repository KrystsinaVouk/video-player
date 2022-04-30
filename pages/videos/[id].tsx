import React from 'react';
import {Button, Grid} from "@material-ui/core";
import MainLayout from "../../layouts/MainLayout";
import {useRouter} from "next/router";

const VideoPage = () => {
    const router = useRouter();
    const video = {
        id: '1',
        name: 'Video 1',
        artist: 'some',
        text: 'some text',
        listens: 10,
        picture: 'https://th.bing.com/th/id/R.1b50867395e05be07f7e98df254c4bdd?rik=LkqDPkXcQRiHBQ&riu=http%3a%2f%2fwww.zastavki.com%2fpictures%2f1680x1050%2f2010%2fAnimals_Cats_Little_Kitten_024152_.jpg&ehk=FDyINAyx3EMo3QTVkI5LCj3QUxQpRQ64TfFhTsEY%2bsM%3d&risl=&pid=ImgRaw&r=0',
        videoURL: 'url'
    }

    return (
        <MainLayout>
            <Button
                variant={"outlined"}
                style={{fontSize: 32}}
                onClick={() => router.push('/videos')}
            >
                Come back to the videos
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img alt={video.name} src={video.picture} width={200} height={200}/>
                <div style={{marginLeft: 30}}>
                    <h1>Video title - {video.name}</h1>
                    <h1>The author - {video.artist}</h1>
                    <h1>Seen - {video.listens}</h1>
                </div>
            </Grid>
            <h1>Description</h1>
            <p>{video.text}</p>
        </MainLayout>
    );
};

export default VideoPage;
