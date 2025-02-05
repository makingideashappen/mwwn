import * as React from "react";
import "../styles.css";
import { Slice } from "gatsby";
import CookieBanner from "./cookie-baner"; // import the CookieBanner component

const Layout = ({ children }) => {
  return (
    <div style={{ paddingTop: "120px" }}>
      <Slice alias="header" />
      {children}

      <Slice alias="footer" />
    </div>
  );
};

export default Layout;
