import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Project from "./components/Project";

type Props = {};

export default function App({}: Props) {
  return (
    <div>
      <Navbar />

      <div className="portfolio-container">
        <AboutMe />
        <Skills />
        <Project />
      </div>
    </div>
  );
}
