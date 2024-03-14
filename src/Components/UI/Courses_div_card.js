import React from "react";
import { Link } from "react-router-dom";

const Courses_div_card = (props) => {
  return (
    <Link to={`/course-detail/${props.name}`}>
      <div className="card">
        <div className="image">
          <img src={props.image}></img>
        </div>
        <div className="content">
          <span className="name">{props.name}</span>
          <h3 className="title">{props.title}</h3>
          <div className="bottom">
            <div className="duration">
              <i className="fa-solid fa-clock"></i>
              <span>{props.duration}</span>
            </div>
            {/* <div className="price">
              <i class="fa-solid fa-tag"></i>
              <span>${props.price}</span>
            </div> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Courses_div_card;
