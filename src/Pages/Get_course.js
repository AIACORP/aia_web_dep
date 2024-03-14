import React from "react";
import courses from "../Data/Data";
import { useParams } from "react-router-dom";

const Get_course = () => {
  const { name } = useParams();

  const course = courses.find((course) => course.name === name);

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
      <h1 className="title">Apply For Course</h1>
      <div className="form">
        <form
          onSubmit={handleSubmit}
          method="POST"
          action="https://script.google.com/macros/s/AKfycbyGF1tjQ3a3sB6WObydUJof3QUrx3dPntR9gLyzdgzFg8VLy74MlSZnjbGuwzqgoLnl/exec"
        >
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" />
          <label htmlFor="course">Course</label>
          <select id="course" name="course">
            {course ? (
              <option selected key={course.id} value={course.name}>
                {course.name}
              </option>
            ) : (
              <option selected disabled value="unknown">
                Select Course
              </option>
            )}

            {courses.map((course) => (
              <option key={course.id} value={course.name}>
                {course.name}
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

export default Get_course;
