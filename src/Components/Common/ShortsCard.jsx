import React, { useState } from "react";
import "./ShortsCard.css";
import reelVideo from "../../Image/reelvideo.svg";
const ShortsCard = ({ shortsUrl, title, imgUrl }) => {
  const [defaultImage, setDefaultImage] = useState(false);
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handlePlay = () => {
    setDefaultImage(true);
  };

  const handleClose = () => {
    setDefaultImage(false);
  };

  return (
    <>
      <div
        className="shorts-card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {defaultImage ? (
          <div className="youTube-shorts-frame">
            <iframe
              title="shorts"
              width="100%"
              height="100%"
              src={shortsUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <span className="play-close" onClick={handleClose}>
              <i className="bi bi-x"></i>
            </span>
          </div>
        ) : (
          <div className="custom-shorts">
            <div className="reel-video">
              <img className="video-icon-img" src={reelVideo} alt="" />
            </div>
            {hover && (
              <span className="play-btn" onClick={handlePlay}>
                <i className="bi bi-play-fill"></i>
              </span>
            )}
            <img src={imgUrl} alt="customimage" />
            <div className="shorts-title">{title}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShortsCard;
