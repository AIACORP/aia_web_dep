import React from "react";

const GetintouchForm = () => {
  return (
    <div className="get_in_touch_Form">
      <div className="get_in_touch_container">
        <div className="left">
          <h1 className="title">Get in touch</h1>

          <form action="">
            <div className="input">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Subject" />{" "}
            </div>
            <div className="message">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Your Message"
              ></textarea>
            </div>

            <div className="submit">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetintouchForm;
