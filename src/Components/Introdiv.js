import React, { useState, useEffect } from "react";
import Special_div from "./Special_div";
import courses from "../Data/Data";
import { Link } from "react-router-dom";

const Introdiv = () => {
  const [index, setIndex] = useState(0);
  const total = 2; // Total number of carousel items

  const updateCarousel = (direction) => {
    let newIndex = index + direction;
    if (newIndex < 0) newIndex = total - 1;
    else if (newIndex === total) newIndex = 0;
    setIndex(newIndex);
  };

  useEffect(() => {
    updateCarousel(0); // Initialize carousel
  }, []);

  return (
    <div className="intro-div-main">
      <Special_div />

      {/* <div className="courses-div">
        <h1>Our Courses</h1>
        <div className="carousel">
          <div className="controls">
            <button id="prev" onClick={() => updateCarousel(-1)}>
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button id="next" onClick={() => updateCarousel(1)}>
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
          <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img
              src="https://images.unsplash.com/photo-1614006659838-d4ca51cbd117?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 1"
            />
            <h1>Aesthetics</h1>
            <p>Course description goes here</p>
            <button>Learn More</button>
          </div>
          <div className={`carousel-item ${index === 1 ? "active" : ""}`}>
            <img
              src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 2"
            />
            <h1>Hair Dressing</h1>
            <p>Course description goes here</p>
            <button>Learn More</button>
          </div>
        </div>
      </div> */}
      <div className="courses-div">
        <h1 className="title" style={{ textAlign: "center" }}>
          Our Courses
        </h1>

        <section class="articles">
          <article>
            <div class="article-wrapper">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </figure>
              <div class="article-body">
                <h2>Makeup Courses</h2>
                <ul>
                  {courses
                    .filter((course) => course.category === "Makeup")
                    .slice(0, 3)
                    .map((course) => (
                      <li>{course.name}</li>
                    ))}
                </ul>
              </div>
            </div>
          </article>
          <article>
            <div class="article-wrapper">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </figure>
              <div class="article-body">
                <h2>Beauty Courses</h2>
                <ul>
                  {courses
                    .filter((course) => course.category === "Beauty")
                    .slice(0, 3)
                    .map((course) => (
                      <li>{course.name}</li>
                    ))}
                </ul>
              </div>
            </div>
          </article>
          <article>
            <div class="article-wrapper">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1572743686183-729b40b9230e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </figure>
              <div class="article-body">
                <h2>Hair Courses</h2>
                <ul>
                  {courses
                    .filter((course) => course.category === "Hair")
                    .slice(0, 3)
                    .map((course) => (
                      <li>{course.name}</li>
                    ))}
                </ul>
              </div>
            </div>
          </article>
        </section>
        <Link to="/courses" class="read-more">
          VIEW ALL
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Introdiv;
