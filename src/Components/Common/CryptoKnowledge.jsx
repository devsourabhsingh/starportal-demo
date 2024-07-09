import React from "react";
import "./CryptoKnowledge.css";
const CryptoKnowledge = ({ Subtitle, SubImage, taskExpect }) => {
  return (
    <>
      <div className="card  mb-3 crypto-Main-chapter" style={{ width: "100%" }}>
        <div
          className="row g-0 d-flex flex-nowrap align-items-center p-xxl-2"
          style={{ gap: "16px" }}
        >
          <div className="col-12 col-sm-4 col-md-3 crypto-chapter-img">
            <img src={SubImage} className="img-fluid crypto-img" alt="..." />
          </div>
          <div className="col-12 col-sm-8 col-md-9">
            <div className="card-body">
              <h5 className="card-title text-white mb-xxl-3">{Subtitle}</h5>
              <hr className="custom-hr" />
              <div className="subItem mt-xxl-3" style={{ gap: "10px" }}>
                <p>{taskExpect} Tasks</p>
                <div style={{ width: "13rem" }}>
                  <div
                    className="progress-bar progress-chapter-bar"
                    role="progressbar"
                    style={{ width: "100%", height: "15px" }}
                    aria-valuenow="100"
                    aria-valuemin="100"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div>
                  <i className="bi bi-check-circle"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoKnowledge;
