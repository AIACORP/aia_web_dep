import React from "react";
import GetintouchForm from "../Components/GetintouchForm";
import Location from "../Components/Location";
import Socials from "../Components/Socials";

const Contact = () => {
  return (
    <div className="contact_div_main">
      <GetintouchForm /> <Location /> <Socials />
    </div>
  );
};

export default Contact;
