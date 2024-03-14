import React from "react";

const Socials = () => {
  return (
    <div className="socials">
      <h1>Follow us on:</h1>
      <a
        href="https://www.facebook.com/aiaweb"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-facebook-f"></i>
      </a>
      <a
        href="https://www.instagram.com/aiaweb"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.twitter.com/aiaweb" target="_blank" rel="noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a
        href="https://www.linkedin.com/aiaweb"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  );
};

export default Socials;
