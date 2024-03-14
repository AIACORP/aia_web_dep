import React from "react";
import services from "../Data/Data";
import { useParams } from "react-router-dom";

const Get_service = () => {
  const { name } = useParams();

  const service = services.find((service) => service.name === name);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyGF1tjQ3a3sB6WObydUJof3QUrx3dPntR9gLyzdgzFg8VLy74MlSZnjbGuwzqgoLnl/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      alert("Application has been submitted successfully!");
    } else {
      alert("There was error while processing your request! Please try again.");
    }
  };

  return (
    <div className="get_course_div_main">
      <h1 className="title">Apply For services</h1>
      <div className="form">
        <form
          onSubmit={handleSubmit}
          method="POST"
          action="https://script.google.com/macros/s/AKfycbx1MOtu6vNf0i3TJMrICfVbuWTkacvBdHnYSeCTtUlliTQtb2GrHtAmjPFjV7NS6fCGYA/exec"
        >
          {" "}
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" />
          <label htmlFor="service">service</label>
          <select id="service" name="service">
            {service ? (
              <option selected value={service.name}>
                {service.name}
              </option>
            ) : (
              <option selected disabled value="unknown">
                Select service
              </option>
            )}

            {services.map((service) => (
              <option key={service.id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Get_service;
