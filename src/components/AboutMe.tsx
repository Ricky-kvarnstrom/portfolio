import React from "react";
import "./AboutMe.css";

type Props = {};

export default function AboutMe({}: Props) {
  return (
    <div className="about-me">
      <img src="src/assets/techover-bild.jpg" alt="" />
      <div className="about-me-text">
        <h2>Hej</h2>
        <p>lyssna</p>
      </div>
    </div>
  );
}
