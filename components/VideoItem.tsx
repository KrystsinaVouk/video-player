import React from 'react';
import {IImage, IVideoMediaContent} from "../types/video";
import {Card, CardContent, CardMedia, Typography} from "@material-ui/core";
import {useRouter} from "next/router";
import {useActions} from "../hooks/useActions";
// @ts-ignore
import styles from "../styles/VideoItem.module.scss";

interface IVideoItemProps {
    video: IVideoMediaContent;
}

const VideoItem: React.FC<IVideoItemProps> = ({video}) => {
    const {setActive} = useActions();
    const { push } = useRouter();

    const getFrameImage = (images: IImage[]) => {
        const imageFrame = images.filter(
            (img) => img.ImageTypeCode === "FRAME"
        );
        // TODO: do refactor
        return imageFrame.length ? imageFrame[0].Url : `https://th.bing.com/th/id/R.86d67c8fcfa5710abddbd03a0839de4a?rik=bzfGCJ7IhvprCA&pid=ImgRaw&r=0`;
    };

    const onClickVideo = () => {
        setActive(video);
        push(`/videos/${video.Id}?streamType=TRIAL`);
    }

    return (
        <Card
            onClick={onClickVideo}
            className={styles.videoItemCard}

        >
            <CardMedia
                component="img"
                height="240"
                image={getFrameImage(video.Images)}
                alt={video.Title}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {video.Title}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default VideoItem;
