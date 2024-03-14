import React from "react";
import special1 from "../Static/Images/special_01.jpg";
import special2 from "../Static/Images/special_02.jpg";
import special3 from "../Static/Images/special_03.jpg";

const Special_div = () => {
  return (
    <div className="special_div_main">
      <h1 className="title">Why Are We Different</h1>
      <div className="cards">
        <div className="card">
          <div className="image">
            <img src={special1}></img>
          </div>
          <div className="text">
            <span className="main main1">
              We Provide <span className="line2">Services</span>
            </span>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={special2}></img>
          </div>
          <div className="text">
            <span className="main main2">
              We Provide <span className="line2">Courses</span>
            </span>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={special3}></img>
          </div>
          <div className="text">
            <span className="main main3">
              We Are <span className="line2">Global</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special_div;
