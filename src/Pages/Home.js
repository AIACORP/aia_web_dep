import React from "react";
import "../Static/Styles/Style.css";
import Navbar from "../Components/Navbar";
import Herodiv from "../Components/Herodiv";
import Introdiv from "../Components/Introdiv";
import Textrevealdiv from "../Components/Textrevealdiv";
import Testimonialsdiv from "../Components/Testimonialsdiv";
import Footer from "../Components/Footer";
import Home_services_div from "../Components/Home_services_div";
import Special_div from "../Components/Special_div";

const Home = () => {
  return (
    <div>
      <Herodiv />
      <Introdiv />
      <Textrevealdiv />
      <Home_services_div />
      <Testimonialsdiv />
    </div>
  );
};

export default Home;
