import React, { useState } from "react";
import "./CryptoDictionary.css";
import cryptoLearn from "../../Image/cryptoGame.svg";
const CryptoDictionary = () => {
  const [switchTab, setSwitchTab] = useState(false);
  const handleSwitch = () => {
    setSwitchTab(!switchTab);
  };
  return (
    <>
      <div className="Crypto-dictionary-main container mx-auto">
        <div className="dictionary-head">
          <div className="sub-dictionary-head">Crypto Dictionary</div>
          <div className="dictionary-subtitle">
            Your one-stop to catch up on all crypto terms
          </div>
        </div>
        <div className="crypto-learn-content">
          <img
            src={cryptoLearn}
            className="cryptoLearn"
            alt="cryptoLearnImage"
          />
          <div className="crypto-web-content">
            <div>
              <h4 className="crypto-learn-subhead">Web3 + Degen Glossary</h4>
              <h6 className="crypto-own-subhead">Your own crypto dictionary</h6>
            </div>
            <div className="dictionary-icon">
              <i className="bi bi-book"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="crypto-slide-button">
        <div className="switch-button">
          <div
            className="essential-slide-btn active-tab"
            onClick={handleSwitch}
          >
            Essentials
          </div>
          <div className=" position-relative">
            <div className="alpha-tab">Alpha Hub</div>
          </div>
          <div className="tab-switcher-btn"></div>
        </div>
      </div>
    </>
  );
};

export default CryptoDictionary;
