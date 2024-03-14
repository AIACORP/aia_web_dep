import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Herodiv = () => {
  const heroDiv = useRef(null);
  const title = useRef(null);

  useEffect(() => {
    gsap.to(heroDiv.current, {
      y: 200,
      scrollTrigger: {
        trigger: heroDiv.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(title.current, {
      y: -400,
      scrollTrigger: {
        trigger: heroDiv.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="hero-div-main" ref={heroDiv}>
      <div className="hero-text">
        <h1 className="title" ref={title}>
          The Acedemy Of Aesthetics
        </h1>
      </div>
    </div>
  );
};

export default Herodiv;
