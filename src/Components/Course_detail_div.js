import React from "react";
import { Link, useParams } from "react-router-dom";
import courses from "../Data/Data";

const Course_detail_div = () => {
  const { name } = useParams();

  // Find the course with the matching title
  const course = courses.find((course) => course.name === name);

  return (
    <div className="course_detail_div">
      <div className="top">
        <div className="left">
          <div className="image">
            <img src={course.image}></img>
          </div>
          <div className="buttons">
            <h2 className="price">${course.price}</h2>
            <Link to={`/get-course/${course.name}`}>
              <button className="btn">Enquire Now</button>
            </Link>
          </div>
        </div>
        <div className="right">
          <h1 className="title">{course.title}</h1>
          <p className="description">{course.description}</p>

          <div className="details">
            <ul>
              <li>
                <i className="fa-solid fa-user-group"></i>
                <span>Level: {course.audience}</span>
              </li>
              <li>
                <i className="fa-solid fa-earth-americas"></i>
                <span>Mode: {course.destination}</span>
              </li>
              <li>
                <i className="fa-solid fa-language"></i>
                <span>Language: {course.language}</span>
              </li>
              <li>
                <i className="fa-solid fa-award"></i>
                <span>Certification: {course.certification}</span>
              </li>
              <li>
                <i className="fa-solid fa-clock"></i>{" "}
                <span>Duration: {course.duration}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bottom">
        {" "}
        <h2 className="title">Brief</h2>
        <p className="text">{course.brief}</p>
        <h2 className="title">Requirements</h2>
        <p className="text">{course.requirements}</p>
        <h2 className="title">Instructor</h2>
        <p className="text">{course.instructor}</p>
        {course.kit_content ? (
          <>
            <h2 className="title">Kit Included</h2>
            <ul className="kit_details">
              {course.kit_content.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </>
        ) : null}{" "}
      </div>
    </div>
  );
};

export default Course_detail_div;
