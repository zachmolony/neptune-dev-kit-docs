import React from "react";
import { Helmet } from "react-helmet-async";

const Wrapper = ({ children, doc }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Neptune Developer Kit</title>
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link href="http://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <div style={{ fontFamily: "SF Pro Display" }}>{children}</div>
    </>
  );
};

export default Wrapper;
