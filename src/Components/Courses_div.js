import React from "react";
import Courses_div_card from "./UI/Courses_div_card";
import courses from "../Data/Data";

const Courses_div = () => {
  return (
    <div className="courses_div_main">
      <h1 className="title">Our Courses</h1>
      <div className="cards">
        {courses.map((course) => (
          <Courses_div_card
            key={course.id}
            image={course.image}
            name={course.name}
            title={course.title}
            duration={course.duration}
            price={course.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses_div;
