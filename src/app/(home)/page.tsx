import { About, Pricing, Services, WhatWeDo, WhoWeAre } from "@/component/home";
import React from "react";

const Home = () => {
  return (
    <>
      <Services />
      <About/>
      <WhoWeAre/>
      <WhatWeDo/>
      <Pricing/>
    </>
  );
};

export default Home;
