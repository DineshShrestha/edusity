import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./VideoPlayer.css";
import video from "../../assets/college-video.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const overlayRef = useRef(null);

  const closePlayer = () => {
    setPlayState(false);
  };

  useEffect(() => {
    if (!playState) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setPlayState(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [playState, setPlayState]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      closePlayer();
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Campus introduction video"
    >
      <video src={video} autoPlay controls />
      <button
        className="video-close-btn"
        onClick={closePlayer}
        aria-label="Close video"
      >
        ✕
      </button>
    </div>
  );
};

VideoPlayer.propTypes = {
  playState: PropTypes.bool.isRequired,
  setPlayState: PropTypes.func.isRequired,
};

export default VideoPlayer;
