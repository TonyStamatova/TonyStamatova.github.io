import React, { Component } from "react";
import './Logo.css';

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <h1 className="name">Antoniya Stamatova</h1>
        <div className="d-flex justify-content-center">
          <hr className="divider"/>
        </div>
        <h2 className="occupation">Software Developer</h2>
      </div>
    );
  }
}

export default Logo;