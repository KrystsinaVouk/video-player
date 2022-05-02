import React from 'react';

interface VideoProgressProps {
    left: number;
    right: number;
    width?: string;
    onChange: (e) => void;
}

const VideoProgress:React.FC<VideoProgressProps> = ({left, right, onChange, width}) => {
    return (
        <div style={{display:"flex"}}>
            <input
                style={{width: width ? width : ''}}
                type={"range"}
                min={0}
                max={right}
                value={left}
                onChange={onChange}
            />
            <div>{left} / {right}</div>
        </div>
    );
}

export default VideoProgress;
