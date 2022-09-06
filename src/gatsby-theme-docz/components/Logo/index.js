import React from "react";

const styles = {
  logo1: {
    height: "100%",
    paddingTop: "3rem",
    paddingBottom: "3rem",
  },
  title1: {
    fontSize: "2rem",
  },
};

export const Logo = ({ children }) => {
  return (
    <>
      <img
        src="https://main.dvmlxraj0i0u5.amplifyapp.com/static/media/planet.24e15da1459bd6c16fdc.jpeg"
        alt="That's my logo"
        style={styles.logo1}
      />
      {children}
      <h1 style={styles.title1}>Neptune Developer Kit</h1>
    </>
  );
};
