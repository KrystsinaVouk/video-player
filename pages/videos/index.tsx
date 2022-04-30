import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Grid, Card, Button, Box} from "@material-ui/core";
import {useRouter} from "next/router";
import {IVideo} from "../../types/video";
import VideoList from "../../components/VideoList";

function Index() {
    const router = useRouter();
    const videos: IVideo[] = [
        {id: '1', name: 'Video 1', artist:'some', text: 'some text', listens: 10, picture: 'https://th.bing.com/th/id/R.1b50867395e05be07f7e98df254c4bdd?rik=LkqDPkXcQRiHBQ&riu=http%3a%2f%2fwww.zastavki.com%2fpictures%2f1680x1050%2f2010%2fAnimals_Cats_Little_Kitten_024152_.jpg&ehk=FDyINAyx3EMo3QTVkI5LCj3QUxQpRQ64TfFhTsEY%2bsM%3d&risl=&pid=ImgRaw&r=0', videoURL: 'url'},
        {id: '2', name: 'Video 1', artist:'some', text: 'some text', listens: 10, picture: 'https://th.bing.com/th/id/OIP.rI-XyJnK5QlOHQ_Veg77CgHaEK?pid=ImgDet&rs=1', videoURL: 'url'},
        {id: '3', name: 'Video 1', artist:'some', text: 'some text', listens: 10, picture: 'https://www.jedicraftgirl.com/wp-content/uploads/2015/01/bengal-kitten-9.jpg', videoURL: 'url'},
    ]

    return (
        <MainLayout>
            <Grid container justifyContent="center">
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent="space-between">
                            <h1>Videos</h1>
                            <Button onClick={()=>router.push('/videos/display')}>Load the videos</Button>
                        </Grid>
                    </Box>
                    <VideoList videos={videos}/>
                </Card>
            </Grid>
        </MainLayout>
    );
}

export default Index;
