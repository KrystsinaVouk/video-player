import React from "react";
import {Card, CardContent, CardMedia, Typography} from "@material-ui/core";
import {useRouter} from "next/router";
import {IImage, IVideoMediaContent} from "../types/video";
import {useActions} from "../hooks/useActions";
// @ts-ignore
import styles from "../styles/VideoItem.module.scss";

interface IVideoItemProps {
    video: IVideoMediaContent;
}

const VideoItem: React.FC<IVideoItemProps> = ({video}) => {
    const {setActive} = useActions();
    const {push} = useRouter();

    const getFrameImage = (images: IImage[]) => images.filter(
            (img) => img.ImageTypeCode === "FRAME"
    )[0].Url;

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
