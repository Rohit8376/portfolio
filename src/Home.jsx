import React from "react";
import Common from "./common";
import web from "../src/images/programmer.png";

const Home = () => {
  return (
    <>
      <Common
        // name="Grow your Business with"
        name="Hello Hooman, I am"
        visit="/service"
        btnname="Get Started"
        imgsrc={web}
      />
    </>
  );
};

export default Home;
