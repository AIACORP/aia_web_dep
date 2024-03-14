import React from "react";
import Services_div_card from "./UI/Services_div_card";
import { courses, services } from "../Data/Data";

const Services_div = () => {
  return (
    <div className="services_div_main">
      <h1 className="title">Our Services</h1>
      <div className="cards">
        {services.map((service) => (
          <Services_div_card
            key={service.id}
            image={service.image}
            name={service.name}
            title={service.title}
            duration={service.duration}
            description={service.description}
            price={service.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Services_div;
