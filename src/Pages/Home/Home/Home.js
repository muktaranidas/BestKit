import React from "react";
import MarketingPartners from "../MarketingPartners/MarketingPartners";
import AboutUs from "../../AboutUs/AboutUs";
import OurCoreValuesPrinciples from "../OurCoreValuesPrinciples/OurCoreValuesPrinciples";
import Banner from "../Banner/Banner";
import Button from "../../Shared/Button/Button";
import AboutBottom from "../AboutBottom/AboutBottom";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MarketingPartners></MarketingPartners>
      {/* <AboutUs></AboutUs> */}
      <AboutBottom></AboutBottom>
      <OurCoreValuesPrinciples></OurCoreValuesPrinciples>
    </div>
  );
};

export default Home;
