import React, { Component } from "react";
import Project from "./Project";
import { projects } from "../../constants/Constants.jsx";
import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <ul>
          {
            projects.map(
              (x) => <Project project={x} />
            )
          }
        </ul>
      </div>
    );
  }
}

export default Projects;
