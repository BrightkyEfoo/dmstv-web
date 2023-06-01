import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import React, { FC, useRef } from 'react';
import { Ellipsis } from '../utils/Ellipsis';

type Props = {
  videoUrl: string;
  title: string;
  description: string;
  click : (videoUrl : string)=>void
};

const VideoSmall: FC<Props> = ({ videoUrl, title, description , click }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const seekToPosition = (pos: number) => {
    if (!videoRef.current) return;
    if (pos < 0 || pos > 1) return;

    const durationMs = videoRef.current.duration * 1000 || 0;

    const newElapsedMs = durationMs * pos;
    const newTimeSec = newElapsedMs / 1000;
    videoRef.current.currentTime = newTimeSec;
  };
  return (
    <Card
      hoverable
      style={{ width: 300 , overflow:'hidden' , cursor : 'pointer'}}
      cover={
        <video ref={videoRef}>
          <source src={videoUrl} />
        </video>
      }
      onMouseEnter={() => {

        videoRef.current?.play();
      }}
      onMouseLeave={() => {
        videoRef.current?.pause();
        seekToPosition(0);
      }}
    >
      <Meta title={title} description={Ellipsis(200, description)} />
    </Card>
  );
};

export default VideoSmall;
