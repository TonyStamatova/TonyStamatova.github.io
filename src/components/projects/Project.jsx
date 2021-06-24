import React, { Component } from "react";
import ProjectLink from "./ProjectLink";
import './Project.css';

class Project extends Component {
  render() {
    var project = this.props.project;

    const renderDeployedOnParagraph = () => {
      if (project.deployedOn) {
        return <p className="card-text"><b>Deployed on:</b> {project.deployedOn}</p>;
      } else {
        return null;
      }
    }

    return (
      <div className="col-xl-4 col-md-4 col-sm-6 col-xs-12 d-flex justify-content-center">
        <div className="card w-100">
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <div className="row d-flex justify-content-center">
              <div className="col-11 text-start">
                <b className="card-text">{project.type}</b>
                <p className="card-text"><b>Technology Stack:</b> {project.techStack.join(" | ")}</p>
                {renderDeployedOnParagraph()}
                <p className="card-text"><b>Description:</b> {project.description}</p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="row d-flex justify-content-around">
              <ProjectLink link={project.links.demoLink} label="Demo" />
              <ProjectLink link={project.links.linkToRepo} label="Source Code" />
              <ProjectLink link={project.links.createAnIssue} label="Create an Issue" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;