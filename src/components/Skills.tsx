import React from "react";
import { FaReact, FaCss3Alt, FaNode } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { SiJavascript, SiHtml5, SiTypescript, SiMongodb } from "react-icons/si";
import "./Skills.css";

type Props = {};

export default function Skills({}: Props) {
  return (
    <div className="skills-side">
      <div className="icons">
        <FaReact />
        <p>React</p>
      </div>
      <div className="icons">
        <SiJavascript />
        <p>Javascript</p>
      </div>
      <div className="icons">
        <SiHtml5 />
        <p>Html</p>
      </div>
      <div className="icons">
        <FaCss3Alt />
        <p>Css</p>
      </div>
      <div className="icons">
        <SiTypescript />
        <p>Typescript</p>
      </div>
      <div className="icons">
        <FaNode />
        <p>Node</p>
      </div>
      <div className="icons">
        <SiMongodb />
        <p>MongoDb</p>
      </div>
      <div className="icons">
        <BsGit />
        <p>Git</p>
      </div>
    </div>
  );
}
