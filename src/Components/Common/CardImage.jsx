import React from "react";
import "./CardImage.css";
import lock from "../../Image/lock-icon.svg";

const CardImage = ({ certifiedLabel }) => {
  return (
    <>
      <div className="common-picture-card mt-4">
        <img src={certifiedLabel} className="common-image" alt="" />
      </div>
      <div className="lock-image">
        <img src={lock} alt="" />
      </div>
    </>
  );
};

export default CardImage;
