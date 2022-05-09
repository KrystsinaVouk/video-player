import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchPhotos} from "../store/action-creators/photo";
import {useDispatch} from "react-redux";
import {NextThunkDispatch} from "../store";
// @ts-ignore
import styles from "../styles/Photos.module.scss"
import MainLayout from "../layouts/MainLayout";
import {Grid, Typography} from "@material-ui/core";
import Loader from "../components/Loader";

function Photos() {
    const dispatch = useDispatch() as NextThunkDispatch;
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);
    const limit = 10;

    const {photos, totalCount, error} = useTypedSelector(state => state.photo);

    useEffect( () => {
        const fetchPhotosData = async () => {
            await dispatch(fetchPhotos(currentPage, limit));
        }

        if (fetching) {
            fetchPhotosData().then(res => {
                setCurrentPage(prevState => prevState + 1);
            }).finally(() => setFetching(false))
        }
    }, [fetching]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, [])

    const scrollHandler = (event) => {
        if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 100
        && photos.length < totalCount) {
            console.log('scrooool');
            setFetching(true);
        }
    }

    if (error) {
        return (
            <MainLayout>
                <Typography color="secondary" variant="h4">{error}</Typography>
            </MainLayout>
        )
    }

    if (!photos.length) {
        return <Loader color={'F6D1B4FF'}>{`Loading the photos`}</Loader>
    }

    return (
        <Grid container direction="column" alignItems="center" className={styles.mainPhotoGrid}>
            {photos.length && photos.map(photo => {
                return (
                    <Grid
                        key={photo.id}
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        className={styles.photo}
                    >
                        <img
                            alt={photo.title}
                            src={photo.thumbnailUrl}
                            width={100}
                            height={100}
                        />
                        <Typography variant="h5">{photo.title}</Typography>
                    </Grid>
                )
            })}
        </Grid>
    );
}

export default Photos;
