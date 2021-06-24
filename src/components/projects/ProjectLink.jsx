import React, { Component } from "react";
import './ProjectLink.css';

class ProjectLink extends Component {
  render() {
    if(this.props.link){
        return (
            <div className="project-link col-sm">
              <a href={this.props.link} className="btn btn-project" target="_blank" rel="noopener noreferrer" >{this.props.label}</a>
            </div>
        );
    }

    return null;
  }
}

export default ProjectLink;