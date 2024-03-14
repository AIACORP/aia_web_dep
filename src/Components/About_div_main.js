import React from "react";
import About_div_card1 from "./About_div_card1";
import About_div_card2 from "./About_div_card2";
import Team_div from "./Team_div";

const About_div_main = () => {
  return (
    <div className="about-div-main">
      <About_div_card1 />
      <About_div_card2 />
      <Team_div />
    </div>
  );
};

export default About_div_main;
