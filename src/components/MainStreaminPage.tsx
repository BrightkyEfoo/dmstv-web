import React, { useState } from 'react';
import { videos } from '../mock/Videos';
import VideoSmall from './VideoSmall';
import '../styles/streamingpage.css';
import Player from './Player';

const MainStreaminPage = () => {
  const [actualVideo, setactualVideo] = useState<string | null>(null);
  return (
    <div className="streaming-page-main-container">
      {actualVideo && <Player src={actualVideo} />}
      <div className="streaming-page-main-sub-container">
        {videos.map((video, i) => (
          <VideoSmall
            key={i}
            description={video.description}
            title={video.title}
            videoUrl={video.videoUrl}
            click={videoUrl => {
              setactualVideo(video.videoUrl);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MainStreaminPage;
