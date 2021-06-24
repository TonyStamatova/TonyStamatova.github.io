import React, { Component } from "react";
import Project from "./Project";
import { projects } from "../../constants/Constants.jsx";

class Projects extends Component {
  render() {
    return (
      <div className="projects row">
          {
            projects.map(
              (x) => <Project project={x} />
            )
          }
      </div>
    );
  }
}

export default Projects;
