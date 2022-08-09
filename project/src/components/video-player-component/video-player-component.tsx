// import { Film } from '../../types/films';

import { useEffect, useRef } from 'react';

type VideoPlayerComponentProps = {
  src: string,
  poster: string
}

export function VideoPlayerComponent ({src, poster}:VideoPlayerComponentProps) {
  // const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playFocusCardVideo = setTimeout(() =>
      videoRef.current && videoRef.current.play(),
    1000);

    return () => clearTimeout(playFocusCardVideo);

  });

  return (
    <video src={src} className="player__video" poster={poster} ref={videoRef} width='280' height='175' muted></video>
  );
}
