import { timeOut } from '../../const';
import { useEffect, useRef } from 'react';

type VideoPlayerComponentProps = {
  src: string,
  poster: string
}

export function VideoPlayerComponent ({src, poster}:VideoPlayerComponentProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playFocusCardVideo = setTimeout(() =>
      videoRef.current && videoRef.current.play(),
    timeOut);

    return () => clearTimeout(playFocusCardVideo);

  });

  return (
    <video src={src} className="player__video" poster={poster} ref={videoRef} width='265' height='170' muted></video>
  );
}
