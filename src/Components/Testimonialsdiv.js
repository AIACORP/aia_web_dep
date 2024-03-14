import React, { useState } from "react";

const Testimonialsdiv = () => {
  const [tindex, setTindex] = useState(0);
  const ttotal = 2; // Total number of testimonial items

  const updateTCarousel = (direction) => {
    setTindex((prevTindex) => {
      let newTindex = prevTindex + direction;
      if (newTindex < 0) newTindex = ttotal - 1;
      else if (newTindex === ttotal) newTindex = 0;
      return newTindex;
    });
  };

  return (
    <div className="testimonials-div-main">
      <h1>What Our Customers Says</h1>
      <div className="testimonials">
        <img className="tst-bg" src="./Images/quotation.png" alt="" />
        <div className="tst-controls">
          <button id="tst-prev" onClick={() => updateTCarousel(-1)}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button id="tst-next" onClick={() => updateTCarousel(1)}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
        <div className={`testimonial-item ${tindex === 0 ? "active" : ""}`}>
          <div className="cards">
            <div className="card">
              <div className="profile_pic">
                <img
                  className="prodile-pic"
                  src="https://images.unsplash.com/photo-1507152832244-10d45c7eda57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>

              <div className="tst-details">
                <h1>Amanda Lopez</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam quos, quod, quae, quibusdam quia quae quos, quod,
                  quae, quibusdam
                </p>
              </div>
            </div>
            <div className="card">
              <div className="profile_pic">
                <img
                  className="prodile-pic"
                  src="https://images.unsplash.com/photo-1507152832244-10d45c7eda57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>

              <div className="tst-details">
                <h1>Amanda Lopez</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam quos, quod, quae, quibusdam quia quae quos, quod,
                  quae, quibusdam
                </p>
              </div>
            </div>
            <div className="card">
              <div className="profile_pic">
                <img
                  className="prodile-pic"
                  src="https://images.unsplash.com/photo-1507152832244-10d45c7eda57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>

              <div className="tst-details">
                <h1>Amanda Lopez</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam quos, quod, quae, quibusdam quia quae quos, quod,
                  quae, quibusdam
                </p>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className={`testimonial-item ${tindex === 1 ? "active" : ""}`}>
          <div className="cards">
            <div className="card">
              <div className="profile_pic">
                <img
                  className="prodile-pic"
                  src="https://images.unsplash.com/photo-1507152832244-10d45c7eda57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>

              <div className="tst-details">
                <h1>Amanda Lopez</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam quos, quod, quae, quibusdam quia quae quos, quod,
                  quae, quibusdam
                </p>
              </div>
            </div>

            <div className="card">
              <div className="profile_pic">
                <img
                  className="prodile-pic"
                  src="https://images.unsplash.com/photo-1507152832244-10d45c7eda57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>

              <div className="tst-details">
                <h1>Amanda Lopez</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam quos, quod, quae, quibusdam quia quae quos, quod,
                  quae, quibusdam
                </p>
              </div>
            </div>

            <div className="card">
              <div className="profile_pic">
                <img
                  className="prodile-pic"
                  src="https://images.unsplash.com/photo-1507152832244-10d45c7eda57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>

              <div className="tst-details">
                <h1>Amanda Lopez</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam quos, quod, quae, quibusdam quia quae quos, quod,
                  quae, quibusdam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonialsdiv;
