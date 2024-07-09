import React from "react";
import "./IntractCertifiedCard.css";
import CardImage from "./CardImage";
import brownCat from "../../Image/fancyCat.png";

const IntractCertifiedCard = () => {
  return (
    <>
      <div className="circle-large-check-icon ms-5">
        <i className="bi bi-check-lg"></i>
      </div>
      <CardImage certifiedLabel={brownCat} />
      <div className="align-card-item">
        <div className="w-270 mb-2">
          <p className="text-format">Intract Certified: Earner NFT </p>
          <p className="text-sub-format mt-2">
            Your crypto black-belt <br />
            certificate
          </p>
        </div>
        <div>
          <button className="claim-button">Claim</button>
        </div>
      </div>
    </>
  );
};

export default IntractCertifiedCard;
