import React from "react";
// @ts-ignore
import styles from "../styles/VideoProgress.module.scss"

interface VideoProgressProps {
    left: number;
    right: number;
    width?: number | undefined;
    sec?: string | undefined;
    onChange: (e) => void;
}

const VideoProgress:React.FC<VideoProgressProps> = ({left, right, onChange, width, sec}) => {
    return (
        <div className={styles.progress}>
            <input
                style={{width: width}}
                type="range"
                min={0}
                max={right}
                value={left}
                onChange={onChange}
            />
            <div>{left} / {right}</div>
            <div>{sec}</div>
        </div>
    );
}

export default VideoProgress;
