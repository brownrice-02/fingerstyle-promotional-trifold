import React, { useState } from "react";
import gsap from "gsap";
import "./TriFold.css";

function TriFold() {
  const [state, setState] = useState("closed");
  function handleClick() {
    let tl = gsap.timeline();
    const left = document.querySelector(".left-side");
    const right = document.querySelector(".right-side");
    const centerContent = document.querySelector(".center-content");
    if (state === "closed") {
      setTimeout(() => {
        document.querySelector(".right-side img").src = "/img/output_3.png";
      }, 250);
      right.style.transform = "rotateY(-20deg)";
      setState("half");
      tl.set(centerContent, { opacity: 1 });
    } else if (state === "half") {
      setTimeout(() => {
        document.querySelector(".center-content img").src = "/img/output_2.png";
        document.querySelector(".left-side img").src = "/img/output_1.png";
      }, 250);
      left.style.transform = "rotateY(20deg)";
      setState("open");
      tl.to(centerContent, 1, { opacity: 1 });
    } else {
      right.style.transform = "rotateY(-180deg)";
      left.style.transform = "rotateY(180deg)";
      tl.set(centerContent, { opacity: 1 });
      setState("closed");
      setTimeout(() => {
        document.querySelector(".right-side img").src =
          "/img/output_5_reverse.png";
        document.querySelector(".center-content img").src = "/img/output_4.png";
      }, 250);
    }
  }

  return (
    <div>
      <div className="trifold-container" onClick={handleClick}>
        <div className="left-side">
          <img src="/img/output_1.png" alt="output 1" />
        </div>
        <div className="center">
          <div className="center-content">
            <img src="/img/output_2.png" alt="output 2" />
          </div>
        </div>
        <div className="right-side">
          <img src="/img/output_3.png" alt="output 3" />
        </div>
      </div>
    </div>
  );
}
export default TriFold;
