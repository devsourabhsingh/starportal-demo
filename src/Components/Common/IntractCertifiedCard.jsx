import React from "react";
import "./IntractCertifiedCard.css";
import CardImage from "./CardImage";

const IntractCertifiedCard = ({
  certifiedLabel,
  gainNft,
  crptoDescribeCertificate,
}) => {
  return (
    <>
      <div className="intract-cetified-main-card">
        <div className="circle-large-check-icon ms-5">
          <i className="bi bi-check-lg"></i>
        </div>
        <CardImage certifiedLabel={certifiedLabel} />
        <div className="align-card-item">
          <div className="w-270 mb-2">
            <p className="text-format">Intract Certified: {gainNft} </p>
            <p className="text-sub-format mt-2">{crptoDescribeCertificate}</p>
          </div>
          <div>
            <button className="claim-button">Claim</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntractCertifiedCard;
