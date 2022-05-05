import React, {useEffect} from 'react';
import {Button, Grid} from "@material-ui/core";
import MainLayout from "../../layouts/MainLayout";
import {useRouter} from "next/router";
import Player from "../../components/Player";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const VideoPage = () => {
    const router = useRouter();
    const {active} = useTypedSelector(state => state.player);

    useEffect(()=> {
        if (!active) {
            router.push('/');
        }
    }, [])

    return (
        <MainLayout>
            {active &&
            <>
                <Grid style={{background:'papayawhip', margin:'100px 100px 10px', padding:20, borderRadius:'2%'}}>
                    <Button
                        variant={"outlined"}
                        style={{fontSize: 10}}
                        onClick={() => router.push('/')}
                    >
                        Come back to the videos
                    </Button>
                    <Grid container style={{margin: '10px 0'}}>
                        <img alt={active.Title} src={active.MediaAgeRestrictionImageUrl} width={200} height={200}/>
                        <div style={{marginLeft: 30}}>
                            <h1>{active.Title}</h1>
                            <h3>Media Type - {active.MediaTypeDisplayName}</h3>
                            <h3>Year - {active.Year}</h3>
                        </div>
                    </Grid>
                    <h1>Description</h1>
                    <p>{active.Description}</p>
                </Grid>
                <Player mediaId={15} streamType={"TRIAL"} />
            </>}
        </MainLayout>
    );
};

export default VideoPage;
