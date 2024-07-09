import React from "react";
import "../Article/DropDownContent.css";
import CryptoKnowledge from "../Common/CryptoKnowledge";
const DropDownContent = ({ primaryData, secondaryData }) => {
  return (
    <>
      <div className="drop-down-content">
        {primaryData?.map((item, index) => (
          <CryptoKnowledge
            key={index}
            Subtitle={item?.subTitle}
            SubImage={item?.cryptoUrl}
            taskExpect={item?.taskExpect}
          />
        ))}
        {secondaryData?.map((item, index) => (
          <CryptoKnowledge
            key={index}
            Subtitle={item?.subTitle}
            SubImage={item?.cryptoUrl}
            taskExpect={item?.taskExpect}
          />
        ))}
      </div>
    </>
  );
};

export default DropDownContent;
