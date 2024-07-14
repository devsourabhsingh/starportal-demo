import React, { Children } from "react";
import "./FooterDivider.css";
const FooterDivider = ({ children }) => {
  return (
    <>
      <div className="footer-divider">{children}</div>
    </>
  );
};

export default FooterDivider;
