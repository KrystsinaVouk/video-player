import React from 'react';
import {IImage, IVideoMediaContent} from "../types/video";
import {Card, CardContent, CardMedia, Typography} from "@material-ui/core";
import {useRouter} from "next/router";
import {useActions} from "../hooks/useActions";
// @ts-ignore
import styles from "../styles/VideoItem.module.scss"

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

        return imageFrame.length? imageFrame[0].Url : null;
    };

    const onClickVideo = () => {
        setActive(video);
        push(`/videos/${video.Id}?streamType=TRIAL`);
    }

    return (
        <Card
            onClick={onClickVideo}
            style={{
            maxWidth: 345,
            height: 300,
            marginBottom: 15,
            boxShadow:'0 5px 5px rgba(0,0,0,.6)',
            cursor: 'pointer'
        }}>
            <CardMedia
                component="img"
                height="240"
                image={getFrameImage(video.Images)}
                alt={video.Title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {video.Title}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default VideoItem;
