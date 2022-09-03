import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import NotFoundComponent from '../../components/not-found-component/not-found-component';
import { PlayerControlButtons } from '../../components/player-control-buttons/player-control-buttons';
import Spinner from '../../components/spinner/spinner';
import { ProgressBar } from '../../const';
import { useAppSelector } from '../../hooks';
import { formatSeconds } from '../../utils/convert-second';

function PlayerPageScreen() {
  const {filmList, isDataLoaded} = useAppSelector((state) => state);
  const {id} = useParams();
  const film = filmList.find((element) => Number(element.id ) === Number(id));
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [timeLeft, setTimeLeft] = useState<number>(ProgressBar.Start);
  const [progress, setProgress] = useState<number>(ProgressBar.Start);
  const timemeLeft = formatSeconds(timeLeft.toString());

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current?.currentTime / videoRef.current?.duration) * ProgressBar.End;
      setProgress(currentProgress);
      setTimeLeft(videoRef.current.duration - videoRef.current.currentTime);
    }
  };

  const handlePlayerButtonsClick = () => {
    if(isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  if(isDataLoaded || !film) {
    if(!film) {
      return <NotFoundComponent />;
    }
    return <Spinner />;
  }

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={film.videoLink}
        className="player__video"
        poster={film.backgroundImage}
        onTimeUpdate={handleTimeUpdate}
      >
      </video>

      <button
        type="button"
        className="player__exit"
        onClick={() => {
          videoRef.current?.pause();
          window.history.back();
        }}
      >
            Exit
      </button>
      <PlayerControlButtons handlePlayerButtonsClick={handlePlayerButtonsClick} isPlaying={isPlaying} videoRef={videoRef} timeLeft={timemeLeft} progress={progress} setProgress={setProgress} />
    </div>
  );
}

export default PlayerPageScreen;
