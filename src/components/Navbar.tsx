import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div>
      <nav>
        <div className="name">
          <h1>Ricky.K</h1>
        </div>
        <ul>
          <li>About me</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
