import React from 'react';
import {IImage, IVideoMediaContent} from "../types/video";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {useRouter} from "next/router";
import {useActions} from "../hooks/useActions";
// @ts-ignore
import styles from "../styles/VideoItem.module.scss"

interface IVideoItemProps {
    video: IVideoMediaContent;
}

const VideoItem: React.FC<IVideoItemProps> = ({video}) => {
    const {setActive} = useActions();
    const router = useRouter();

    const getFrameImage = (images: IImage[]) => {
        const imageFrame = images.filter(
            (img) => img.ImageTypeCode === "FRAME"
        );

        return imageFrame.length? imageFrame[0].Url : null;
    };

    const onClickVideo = () => {
        setActive(video);
        router.push(`/videos/${video.Id}`);
    }

    return (
        <Card style={{
            maxWidth: 345,
            marginBottom: 10,
            cursor: 'pointer',
            boxShadow:'0 5px 5px rgba(0,0,0,.6)'
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
                <Typography variant="body2" color="inherit">
                    {video.Description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={onClickVideo} size="small">Watch</Button>
                <Button onClick={onClickVideo} size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default VideoItem;
