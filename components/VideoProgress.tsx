import React from 'react';

interface VideoProgressProps {
    left: number;
    right: number;
    width?: number | undefined;
    sec?: string | undefined;
    onChange: (e) => void;
}

const VideoProgress:React.FC<VideoProgressProps> = ({left, right, onChange, width, sec}) => {
    return (
        <div style={{display:"flex"}}>
            <input
                style={{width: width}}
                type={"range"}
                min={0}
                max={right}
                value={left}
                onChange={onChange}
            />
            <div>{left} / {right}</div>
            <div style={{marginLeft:10}}>{sec}</div>
        </div>
    );
}

export default VideoProgress;
