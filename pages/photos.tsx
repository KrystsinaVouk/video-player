import React from "react";
import {Grid, Typography} from "@material-ui/core";

import MainLayout from "../layouts/MainLayout";
import Loader from "../components/Loader";
import {usePhotos} from "../hooks/usePhotos";
import PhotoCard from "../components/PhotoCard";
import {IPhoto} from "../types/photo";

function Photos() {
    const {photos, error} = usePhotos();

    if (error) {
        return (
            <MainLayout>
                <Typography color="secondary" variant="h4">{error}</Typography>
            </MainLayout>
        )
    }

    if (!photos.length) {
        return <Loader color={"F6D1B4FF"}>{`Loading the photos`}</Loader>
    }

    return (
        <MainLayout title={`Dynamic Photos`} description={`Photos are being loaded dynamically once the user reaches the end of the page`}>
            <Grid container direction="column" alignItems="center">
                {photos.length && photos.map(({id, title, thumbnailUrl}:IPhoto) => {
                    return (
                       <PhotoCard id={id} title={title} source={thumbnailUrl}/>
                    )
                })}
            </Grid>
        </MainLayout>
    );
}

export default Photos;
