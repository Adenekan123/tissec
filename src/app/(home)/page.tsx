import { About, Feedback, Pricing, Services, Teams, WhatWeDo, WhoWeAre } from "@/component/home";
import React from "react";

const Home = () => {
  return (
    <>
      <Services />
      <About/>
      <WhoWeAre/>
      <WhatWeDo/>
      <Pricing/>
      <Teams/>
      <Feedback/>
    </>
  );
};

export default Home;
