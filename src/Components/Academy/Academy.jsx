import React, { useState } from "react";
import "../Academy/Academy.css";
import "../Academy/Academy2.css";
import intractgif from "../../Image/academy-animated-optimize.gif";
import arrowRight from "../../Image/arrow-right.svg";
import Article from "../Article/Article";
import { data } from "../../Data/Data";
import { SubData } from "../../Data/SubData";
import startBreakLine from "../../Image/StartLinebreak.svg";
import MideLineBreak from "../../Image/midlineBreak.svg";
import EndLineDirection from "../../Image/EndDirection.svg";
import FirstAirDrop from "../../Image/FirstAirDrop.svg";
import RoadEarnerToNFT from "../../Image/ReadTpNft.svg";
import catWhite from "../../Image/whiteCat.png";
import IntractCertifiedCard from "../Common/IntractCertifiedCard";
import TimerContainer from "../TimerContainer/TimerContainer";
import ClaimCard from "../ClaimCard/ClaimCard";
import SectionDivide from "../Common/SectionDivide";
import CenterHeading from "../CenterHeading/CenterHeading";
import CryptoDictionary from "../CryptoDictionary/CryptoDictionary";
import Footer from "../Layout/Footer/Footer";
import brownCat from "../../Image/fancyCat.png";

const Academy = () => {
  const [newDrop, setNewDrop] = useState(false);
  const handleStateChange = (childState) => {
    setNewDrop(childState);
  };
  let CryptoIntract1 = {
    crptoGain: "Learner NFT",
    cryptoCertificate: (
      <p>
        Your crypto black-belt
        <br /> certificate
      </p>
    ),
  };
  let CryptoIntract2 = {
    crptoGain: "Earrner NFT",
    cryptoCertificate: (
      <p>
        Your proof of
        <br /> airdrop expertise
      </p>
    ),
  };
  return (
    <>
      <div>
        <div>
          <div className="intract-gif">
            <img src={intractgif} alt="" />
          </div>
          <div className="intaract-target">
            <p>
              <span>Intract users</span> have together made more than
              <span>$100 million</span> in web3.
              <br /> Join them and <span>learn how to earn crypto!</span>
            </p>
          </div>
          <div className="mt-5 text-center">
            <div className="btn-get-start">
              <div className="aside-btn"></div>
              <button className="btn-arrow-move">
                <span>Get Started</span>
                <img src={arrowRight} alt="arrow-right" />
              </button>
            </div>
          </div>
        </div>
        <div className="align-primary-card">
          <div className="mid-section container">
            <div className="section">
              {data?.primary?.map((item, index) => (
                <>
                  <div className="section-first">
                    <div key={index}>
                      <Article
                        onStateChange={handleStateChange}
                        title={item?.title}
                        image={item?.primaryImage}
                        coinImage={item?.secondaryImage}
                        quest={item?.quest}
                        description={item?.description}
                        SubData={{ primary: SubData?.primary }}
                      />
                    </div>
                    <div className="start-break-align-line">
                      <img src={startBreakLine} alt="startBreakLine" />
                    </div>
                    <div className="align-midlineImage">
                      <img src={MideLineBreak} alt="midLineIamge" />
                    </div>
                  </div>
                  <div
                    className={`section-second ${
                      newDrop ? "drop-align-item" : null
                    }`}
                  >
                    <div>
                      <IntractCertifiedCard
                        certifiedLabel={brownCat}
                        gainNft={CryptoIntract1.crptoGain}
                        crptoDescribeCertificate={
                          CryptoIntract1.cryptoCertificate
                        }
                      />
                    </div>
                    <div className="align-end-direction">
                      <img src={EndLineDirection} alt="" />
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="section">
              <div className="section-third">
                {data?.secondary?.map((item, index) => (
                  <>
                    <div>
                      <div className="align-secondary-card" key={index}>
                        <Article
                          onStateChange={handleStateChange}
                          title={item?.title}
                          image={item?.primaryImage}
                          coinImage={item?.secondaryImage}
                          quest={item?.quest}
                          description={item?.description}
                          SubData={{ secondary: SubData?.secondary }}
                        />
                        <div className="align-roadEarner-image">
                          <img src={RoadEarnerToNFT} alt="roadEarnerImage" />
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <div className="section-last">
                <div className="intract-certifeid-card-img">
                  <IntractCertifiedCard
                    certifiedLabel={catWhite}
                    gainNft={CryptoIntract2.crptoGain}
                    crptoDescribeCertificate={CryptoIntract2.cryptoCertificate}
                  />
                </div>

                <div className="airdrop-coin">
                  <img src={FirstAirDrop} alt="First air drop" />
                </div>
              </div>
            </div>
            <div className="align-timer-container">
              <div className="reward-gift-wrapper"></div>
              <div className=" " style={{ width: "320px" }}>
                <TimerContainer />
                <ClaimCard />
              </div>
            </div>
            <div className="mt-5">
              <SectionDivide />
            </div>
            <div>
              <CenterHeading />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <SectionDivide />
        </div>
        <div>
          <CryptoDictionary />
        </div>
        <div className="mt-5">
          <SectionDivide />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Academy;
