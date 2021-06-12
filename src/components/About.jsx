import React, { Component } from "react";
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <p>Hello, my name is Antoniya and I love building stuff that work well.</p>
        <p>I believe one should enjoy the process in order to be satisfied with the final result.</p>
        <hr />
        <p>I used to be a structural engineer, constructing load-bearing structures mostly of industrial buildings, but in 2019 I decided to seek new adventures in the tech world.</p>
        <p>Currently I'm a professionally employed .NET developer, but I'm always interested in discovering new horizons.</p>
        <hr />
        <p>Here you can download my CV, to view my previous commitments and formal education.</p>
      </div>
    );
  }
}

export default About;
