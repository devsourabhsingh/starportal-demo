import "./CenterHeading.css";
import ShortsCard from "../Common/ShortsCard";
import { ShortsData } from "../../Data/ShortsData";

const CenterHeading = () => {
  return (
    <div className="container mx-auto main-card">
      <div className=" text-center">
        <h4 className=" text-white">
          Top Crypto Creators and Projects to Follow
        </h4>
        <h6 className=" sub-head-center mt-xxl-2">
          Answers to your crypto doubts, straight from the experts
        </h6>
      </div>
      <div className="all-crypto-card">
        {ShortsData?.data?.map((short, index) => {
          return (
            <ShortsCard
              key={index}
              shortsUrl={short?.shortsUrl}
              title={short?.title}
              imgUrl={short?.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CenterHeading;
