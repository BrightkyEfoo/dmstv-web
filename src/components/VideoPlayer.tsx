import { PauseCircleFilled, PlayCircleFilled } from '@ant-design/icons';
import React, { FC, useEffect, useRef, useState } from 'react';
import '../styles/video-player-style.css';
import CircularProgress from '@mui/material/CircularProgress';
import { CircularProgressWithLabel } from './CircularProgressWithLabel';
import { LinearProgress } from '@mui/material';

type Props = {
  sources: [string];
  autoPlay?: boolean;
};

const VideoPlayer: FC<Props> = ({ sources, autoPlay = false }) => {
  const [videoState, setVideoState] = useState({
    paused: true,
  });
  // useEffect(() => {
  //   videoRef.current?.load();
  // }, []);

  const [isWaiting, setIsWaiting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [durationSec, setDurationSec] = useState(1);
  const [elapsedSec, setElapsedSec] = useState(1);

  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const bufferRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    const onWaiting = () => {
      if (isPlaying) setIsPlaying(false);
      setIsWaiting(true);
    };

    const onPlay = () => {
      if (isWaiting) setIsWaiting(false);
      setIsPlaying(true);
    };

    const onPause = () => {
      setIsPlaying(false);
      setIsWaiting(false);
    };

    const element = videoRef.current;

    const onProgress = () => {
      if (!element.buffered || !bufferRef.current) return;
      if (!element.buffered.length) return;
      const bufferedEnd = element.buffered.end(element.buffered.length - 1);
      const duration = element.duration;
      if (bufferRef && duration > 0) {
        bufferRef.current.style.width = (bufferedEnd / duration) * 100 + '%';
      }
    };

    const onTimeUpdate = () => {
      setIsWaiting(false);
      if (!element.buffered || !progressRef.current) return;
      const duration = element.duration;
      setDurationSec(duration);
      setElapsedSec(element.currentTime);
      if (progressRef && duration > 0) {
        progressRef.current.style.width =
          (element.currentTime / duration) * 100 + '%';
      }
    };

    element.addEventListener('progress', onProgress);
    element.addEventListener('timeupdate', onTimeUpdate);

    element.addEventListener('waiting', onWaiting);
    element.addEventListener('play', onPlay);
    element.addEventListener('playing', onPlay);
    element.addEventListener('pause', onPause);

    // clean up
    return () => {
      element.removeEventListener('waiting', onWaiting);
      element.removeEventListener('play', onPlay);
      element.removeEventListener('playing', onPlay);
      element.removeEventListener('pause', onPause);
      element.removeEventListener('progress', onProgress);
      element.removeEventListener('timeupdate', onTimeUpdate);
    };
  }, [videoRef.current]);

  // This is where the playback rate is set on the video element.
  useEffect(() => {
    if (!videoRef.current) return;
    if (videoRef.current.playbackRate === playbackRate) return;
    videoRef.current.playbackRate = playbackRate;
  }, [playbackRate]);

  const handlePlayPauseClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const seekToPosition = (pos: number) => {
    if (!videoRef.current) return;
    if (pos < 0 || pos > 1) return;

    const durationMs = videoRef.current.duration * 1000 || 0;

    const newElapsedMs = durationMs * pos;
    const newTimeSec = newElapsedMs / 1000;
    videoRef.current.currentTime = newTimeSec;
  };

  return (
    <div className="video-player">
      <video ref={videoRef}>
        {sources.map((el, i) => (
          <source key={i} src={el} />
        ))}
      </video>
      <div>
        {/* <CircularProgressWithLabel value={76} /> */}
      </div>
      <div>
        {/* <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} /> */}
      </div>
      <div>
        {videoState.paused ? (
          <PlayCircleFilled
            onClick={() => {
              videoRef.current?.play().then(() => {
                setVideoState(prev => {
                  return { ...prev, paused: false };
                });
              });
            }}
          />
        ) : (
          <PauseCircleFilled
            onClick={() => {
              setVideoState(prev => {
                return { ...prev, paused: true };
              });
              videoRef.current?.pause();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
