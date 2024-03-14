import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Textrevealdiv = () => {
  useEffect(() => {
    gsap.to(".text-reveal-div .line1", {
      x: "-80%",
      duration: 10,
      scrollTrigger: {
        trigger: ".text-reveal-div",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.to(".text-reveal-div .line2", {
      x: "20%",
      duration: 10,
      scrollTrigger: {
        trigger: ".text-reveal-div",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="text-reveal-div">
      <h1 className="line1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum cumque
        fugiat exercitationem autem, commodi illo corporis eius et? Repudiandae
        repellendus temporibus rerum esse odio, nemo exercitationem! Commodi
        tenetur quibusdam quia.
      </h1>
      <h1 className="line2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum cumque
        fugiat exercitationem autem, commodi illo corporis eius et? Repudiandae
        repellendus temporibus rerum esse odio, nemo exercitationem! Commodi
        tenetur quibusdam quia.
      </h1>
      <h1 className="line1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum cumque
        fugiat exercitationem autem, commodi illo corporis eius et? Repudiandae
        repellendus temporibus rerum esse odio, nemo exercitationem! Commodi
        tenetur quibusdam quia.
      </h1>
      <h1 className="line2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum cumque
        fugiat exercitationem autem, commodi illo corporis eius et? Repudiandae
        repellendus temporibus rerum esse odio, nemo exercitationem! Commodi
        tenetur quibusdam quia.
      </h1>
    </div>
  );
};

export default Textrevealdiv;
