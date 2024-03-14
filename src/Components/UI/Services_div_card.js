import React from "react";
import { Link } from "react-router-dom";

const Services_div_card = (props) => {
  return (
    <Link to={`/get-service/${props.name}`}>
      <div className="card">
        <div className="image">
          <img src={props.image}></img>
        </div>
        <div className="content">
          <h3 className="title">{props.name}</h3>
          <p className="description">{props.description}</p>
          <div className="bottom">
            <div className="duration">
              <i class="fa-solid fa-clock"></i>
              <span>{props.duration}</span>
            </div>
            <div className="price">
              <i class="fa-solid fa-tag"></i>
              <span>${props.price}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Services_div_card;
