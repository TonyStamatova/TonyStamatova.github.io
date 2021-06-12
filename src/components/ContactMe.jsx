import React, { Component } from "react";
import "./ContactMe.css";

class ContactMe extends Component {
  render() {
    return (
      <div className="contact-me">
        <ul>
          <li><span className="fa fa-phone"></span><text className="details">+359 895 669 349</text></li>
          <li><span className="fa fa-envelope"></span><text className="details">a.stamatova@abv.bg</text></li>
          <li><span className="fa fa-github"></span><a href="https://github.com/TonyStamatova" className="details">TonyStamatova</a></li>
          <li><span className="fa fa-linkedin"></span><a href="https://www.linkedin.com/in/antonia-stamatova-99a163155/" className="details">LinkedIn Profile</a></li>
          <li><span className="fa fa-facebook"></span><a href="https://www.facebook.com/antonia.stamatova" className="details">Antoniya Stamatova</a></li>
          <li><span className="fa fa-skype"></span><text className="details">Antoniya Stamatova</text></li>
        </ul>
      </div>
    );
  }
}

export default ContactMe;
