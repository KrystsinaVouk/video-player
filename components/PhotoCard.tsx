import React from 'react';
import {Grid, Typography} from "@material-ui/core";
// @ts-ignore
import styles from "../styles/PhotoCard.module.scss";

interface IPhotoCardProps {
    id: number;
    title: string;
    source: string
}

const PhotoCard: React.FC<IPhotoCardProps> = ({id, title, source}) => {
    return (
        <Grid
            key={id}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={styles.photo}
        >
            <img
                alt={title}
                src={source}
                width={100}
                height={100}
            />
            <Typography variant="h5">{id}. {title}</Typography>
        </Grid>
    );
}

export default PhotoCard;
