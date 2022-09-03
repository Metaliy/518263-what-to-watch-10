import { ChangeEvent } from 'react';
import { ProgressBar } from '../../const';
import './player-control-buttons.css';

type PlayerControlButtonsProps = {
  handlePlayerButtonsClick : () => void,
  isPlaying: boolean,
  videoRef: React.MutableRefObject<HTMLVideoElement | null>,
  timeLeft: string,
  progress: number,
  setProgress: CallableFunction
}

export function PlayerControlButtons ({handlePlayerButtonsClick, isPlaying, videoRef, timeLeft, progress, setProgress}: PlayerControlButtonsProps) {

  const playPauseBottonTogle = (playngStatus: boolean): JSX.Element => {
    if (playngStatus) {
      return (
        <>
          <svg viewBox="0 0 14 21" width="14" height="21">
            <use xlinkHref="#pause"></use>
          </svg>
          <span>Pause</span>
        </>
      );
    }
    return (
      <>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </>
    );
  };

  const playPauseButtonIcon = playPauseBottonTogle(isPlaying);

  const handleVideoProgress = (evt: ChangeEvent<HTMLInputElement>) => {
    const manualChange = Number(evt.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = (videoRef.current?.duration / ProgressBar.End) * manualChange;
      setProgress(manualChange);
    }
  };

  return (
    <div className="player__controls">
      <div className="player__controls-row">
        <div className="player__time">
          <input
            className="player__progress-setter"
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(evt) => handleVideoProgress(evt)}
          />
          <progress
            className="player__progress"
            value={progress} max="100"
          >
          </progress>
          <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
        </div>
        <div className="player__time-value">- {timeLeft} </div>
      </div>

      <div className="player__controls-row">
        <button
          onClick={handlePlayerButtonsClick}
          type="button"
          className="player__play"
        >
          {playPauseButtonIcon}
        </button>
        <div className="player__name">Transpotting</div>

        <button onClick={() => videoRef.current?.requestFullscreen()} type="button" className="player__full-screen">
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"></use>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>
  );
}
