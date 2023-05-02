import React from "react";
import MarketingPartners from "../MarketingPartners/MarketingPartners";
import AboutUs from "../../AboutUs/AboutUs";
import OurCoreValuesPrinciples from "../OurCoreValuesPrinciples/OurCoreValuesPrinciples";
import Banner from "../Banner/Banner";
import AboutBottom from "../AboutBottom/AboutBottom";
import BestkitDevelope from "../BestkitDevelope/BestkitDevelope";
import PortfolioWorks from "../PortfolioWorks/PortfolioWorks";
import SpecialOutstandingServices from "../SpecialOutstandingServices/SpecialOutstandingServices";
import Testimonial from "../Testimonial/Testimonial";
import FAQ from "../FAQ/FAQ";
import OurSkill from "../OurSkill/OurSkill";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <MarketingPartners></MarketingPartners> */}
      <AboutUs></AboutUs>
      {/* <AboutBottom></AboutBottom> */}
      <OurSkill></OurSkill>
      <SpecialOutstandingServices></SpecialOutstandingServices>
      <BestkitDevelope></BestkitDevelope>
      <PortfolioWorks></PortfolioWorks>
      <OurCoreValuesPrinciples></OurCoreValuesPrinciples>
      <Testimonial></Testimonial>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
