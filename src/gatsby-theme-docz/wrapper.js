import React from "react";
import { Helmet } from "react-helmet-async";

const Wrapper = ({ children, doc }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Neptune Developer Kit</title>
        <link rel="icon" type="image/png" href="https://placekitten.com/50/50" />
        <link href="http://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet" />
      </Helmet>
      <div style={{ fontFamily: "SF Pro Display" }}>{children}</div>
    </>
  );
};

export default Wrapper;
