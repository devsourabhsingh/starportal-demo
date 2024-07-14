import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import FooterDivider from "../../Common/FooterDivider";
const Footer = () => {
  return (
    <>
      <div className=" bg-black position-absolute" style={{ width: "100%" }}>
        <div className="footer-wrapper container mx-auto">
          <div className="footer-main pt-4">
            <Link to="/" className="footer-brand">
              <div className="text-white">
                <h3> intract.</h3>
              </div>
              <div className="little-sub-head">
                We are your personal guide for exploring web3 projects & earning
                100x rewards
              </div>
            </Link>
            <div className="footer-right-content">
              <div className="footer-block">
                <h7 className="text-white">INTRACT</h7>
                <Link to="/">Explore Quests</Link>
                <Link to="/">Comunities</Link>
                <Link to="/">Alpha Hub</Link>
              </div>
              <div className="footer-block">
                <h7 className="text-white">EARN</h7>
                <Link to="/">Refer & Earn</Link>
                <Link to="/">Leaderboard</Link>
                <Link to="/">Achievements</Link>
              </div>
              <div className="footer-block">
                <h7 className="text-white">ABOUT</h7>
                <Link to="/">Product Roadmap</Link>
                <Link to="/">Affiliate Program</Link>
                <Link to="/">Sign up Program</Link>
                <Link to="/">Growth Community</Link>
                <Link to="/">Blogs</Link>
              </div>
              <div className="footer-block">
                <h7 className="text-white">SUPPORT</h7>
                <Link to="/">Help Center</Link>
                <Link to="/">Create your quest</Link>
                <Link to="/">Terms of Service</Link>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Community Guidelines</Link>
              </div>
            </div>
          </div>
          <FooterDivider>
            <p className="disclaimer-section">
              <span className="text-white opacity-75">Disclaimer:</span> Crypto
              Products, Virtual Digital Assets, and NFTs are unregulated and can
              be highly risky. There may be no regulatory recourse for any loss
              from such transactions. We advise the viewer to proceed with
              caution. Nothing in this website or any communication published by
              us amounts to, is intended to be, or should be construed as
              investment or purchase advice of any kind or financial advice or
              promotion under any applicable laws. Any decision made based on
              the content provided on this website or any communication
              published by us shall not be attributable to us.{" "}
            </p>
          </FooterDivider>
          <FooterDivider>
            <div className="disclaimer-create">
              CREATED BY <Link>INTRACT</Link>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <div className="bg-dark rounded pointer mx-2 p-2 fs-5">
                <i className="bi bi-twitter text-primary"></i>
              </div>
              <div className="bg-dark rounded pointer mx-2 p-2 fs-5">
                <i className="bi bi-discord text-info"></i>
              </div>
              <div className="bg-dark rounded pointer mx-2 p-2 fs-5">
                <i className="bi bi-telegram text-primary "></i>
              </div>
              <div className="bg-dark rounded pointer mx-2 p-2 fs-5">
                <i className="bi bi-spotify text-success"></i>
              </div>
            </div>
          </FooterDivider>
        </div>
      </div>
    </>
  );
};

export default Footer;
