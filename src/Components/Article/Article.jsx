import React, { useState } from "react";
import "./Article.css";
import DropDownContent from "./DropDownContent";

const Article = (props) => {
  const { image, title, description, quest, coinImage, SubData } = props;

  const [gain, setGain] = useState(false);

  const handleDropDown = () => {
    setGain(!gain);
  };

  return (
    <>
      <div className="article-section">
        <section style={{ maxWidth: "1250px" }}>
          <div>
            <div
              className={`card crypto-Main ${gain ? "card-expand" : null}`}
              style={{ width: "520px" }}
            >
              <div
                className="row d-flex flex-nowrap align-items-center p-xxl-4"
                style={{ gap: "24px" }}
              >
                <div className="col-md-4 crypto-img-outer">
                  <img src={image} className="img-fluid crypto-img" alt="..." />
                  <div className="quest-btn">{quest} Quest</div>
                </div>
                <div className="col-md-8">
                  <div
                    className={`dropDown-icon ${gain ? "move-down" : null}`}
                    onClick={handleDropDown}
                  >
                    <i className="bi bi-caret-down-fill"></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-white mb-xxl-2">{title}</h5>
                    <p className="fs-6  card-text card-text-color mb-xxl-3">
                      {description}
                    </p>
                    <hr className="custom-hr" />
                    <div className="Experience-btn mt-xxl-4">
                      <img src={coinImage} alt="xpIcon" />
                      <span>1490XPs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {gain ? (
              <DropDownContent
                primaryData={SubData?.primary}
                secondaryData={SubData?.secondary}
              />
            ) : null}
          </div>

          <div></div>
        </section>
      </div>
    </>
  );
};

export default Article;
