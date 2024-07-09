import React from "react";
import "../Academy/Academy.css";
import intractgif from "../../Image/academy-animated-optimize.gif";
import arrowRight from "../../Image/arrow-right.svg";
import Article from "../Article/Article";
import { data } from "../../Data/Data";
import { SubData } from "../../Data/SubData";
import CardImage from "../Common/CardImage";
import startBreakLine from "../../Image/StartLinebreak.svg";
import MideLineBreak from "../../Image/midlineBreak.svg";
import EndLineDirection from "../../Image/EndDirection.svg";
import FirstAirDrop from "../../Image/FirstAirDrop.svg";
import RoadEarnerToNFT from "../../Image/ReadTpNft.svg";

import catWhite from "../../Image/whiteCat.png";
import IntractCertifiedCard from "../Common/IntractCertifiedCard";
import TimerContainer from "../TimerContainer/TimerContainer";
import ClaimCard from "../ClaimCard/ClaimCard";

const Academy = () => {
  return (
    <>
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

      {/* <div>
        {data?.primary?.map((item, index) => (
          <div key={index}>
            <Article
              title={item?.title}
              image={item?.primaryImage}
              coinImage={item?.secondaryImage}
              quest={item?.quest}
              description={item?.description}
              SubData={{ primary: SubData?.primary }}
            />
          </div>
        ))}
      </div>
      <div>
        {data?.secondary?.map((item, index) => (
          <div key={index}>
            <Article
              title={item?.title}
              image={item?.primaryImage}
              coinImage={item?.secondaryImage}
              quest={item?.quest}
              description={item?.description}
              SubData={{ secondary: SubData?.secondary }}
            />
          </div>
        ))}
      </div> */}
      <div className="ms-4 align-primary-card">
        <div>
          {data?.primary?.map((item, index) => (
            <>
              <div className="d-flex align-items-baseline">
                <div>
                  <img src={startBreakLine} alt="" />
                </div>
                <div key={index}>
                  <Article
                    title={item?.title}
                    image={item?.primaryImage}
                    coinImage={item?.secondaryImage}
                    quest={item?.quest}
                    description={item?.description}
                    SubData={{ primary: SubData?.primary }}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="align-midlineImage">
                  <img src={MideLineBreak} alt="" />
                </div>
                <div className="align-card-tag">
                  <IntractCertifiedCard />
                </div>
                <div className="align-end-direction">
                  <img src={EndLineDirection} alt="" />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-center mt-0">
        {data?.secondary?.map((item, index) => (
          <>
            <div className="align-roadEarner-tag">
              <IntractCertifiedCard />
            </div>
            <div className="align-roadEarner-image">
              <img src={RoadEarnerToNFT} alt="" />
            </div>
            <div className="align-secondary-card" key={index}>
              <Article
                title={item?.title}
                image={item?.primaryImage}
                coinImage={item?.secondaryImage}
                quest={item?.quest}
                description={item?.description}
                SubData={{ secondary: SubData?.secondary }}
              />
            </div>
          </>
        ))}
      </div>
      <div className="align-firstDrop-image">
        <img src={FirstAirDrop} alt="First air drop" />
      </div>
      <div className="align-timer-container ">
        <div className="d-flex justify-content-center">
          <TimerContainer />
        </div>
        <div className="d-flex justify-content-center">
          <ClaimCard />
        </div>
      </div>
      {/* <div>
        <ClaimCard />
      </div> */}
      {/* <div>
        <CardImage certifiedLabel={catWhite} />
      </div>
      <div>
        <IntractCertifiedCard />
      </div> */}
    </>
  );
};

export default Academy;
