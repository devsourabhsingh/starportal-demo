import React from "react";
import ClaimNow from "../../Image/claimNow.gif";
import DiscordIcon from "../../Image/discordIcon.svg";
import arrowRight from "../../Image/arrow-right.svg";
import "./ClaimCard.css";
import RewardPathInfo from "../../Image/RewardPath.svg";

const ClaimCard = () => {
  return (
    <>
      <div className="claim-card-wrapper">
        <img src={ClaimNow} alt="claim now gif" className="claim-card-img" />
        <div className="claim-draw-text">Lucky Draw</div>
        <div className="claim-sub-wrapper">
          <div>Exclusive Community</div>
          <span className="align-discord-icon">
            <img src={DiscordIcon} alt="discord-icon" />
            <p className="earn-text">Earndrop</p>
          </span>
        </div>
        <hr className="claim-hr-tag" />
        <div className="claim-sub-wrapper2">
          <div>Complete all Essential quests</div>
          <div className="claim-tick-icon">
            <i className="bi bi-check2" />
          </div>
        </div>
        <div className="claim-sub-wrapper2">
          <div>Complete at least 1 Alpha Hub quest today</div>
          <div className="claim-tick-icon">
            <i className="bi bi-check2" />
          </div>
        </div>
        <div className="claim-now-btn">
          <div>Claim Now</div>
          <img src={arrowRight} alt="" className="Angle Top Icon" />
        </div>
        <img
          src={RewardPathInfo}
          alt="Reward info path"
          className="reward-path"
        />
        <div className="reward-path-wrapper">
          <div className="reward-sub-wrapper">
            Reward info
            <i className="bi bi-info-circle ml-1" />
          </div>
          <div className="reward-sub-wrapper2">
            <p>
              <span>Free access to paid KOL (crypto earning) communities!</span>
            </p>
            <br />
            <p className="reward-text-info">
              Win access to exclusive earning communities of some of the the
              greatest earners in crypto for a month, every 24 hours. Get access
              to unmatched insights, a close-knit community of the best airdrop
              earners, and more.
            </p>
            <br />
            <p className="reward-text-info">
              To win: make sure you've connected your Twitter and Discord
              accounts - and follow our criteria!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClaimCard;
