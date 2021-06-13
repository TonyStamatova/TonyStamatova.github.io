import React, { Component } from "react";
import ContactDetail from "./ContactDetail";
import "./ContactMe.css";

class ContactMe extends Component {
  render() {
    return (
      <div className="contact-me">
        <ul>
          <li><ContactDetail type="phone" details="+359 895 669 349" /></li>
          <li><ContactDetail type="envelope" details="a.stamatova@abv.bg" /></li>
          <li><ContactDetail type="github" link="https://github.com/TonyStamatova" details="TonyStamatova" /></li>
          <li><ContactDetail type="linkedin" link="https://www.linkedin.com/in/antonia-stamatova-99a163155/" details="LinkedIn Profile" /></li>
          <li><ContactDetail type="facebook" link="https://www.facebook.com/antonia.stamatova" details="Message me" /></li>
          <li><ContactDetail type="skype" details="Antoniya Stamatova" /></li>
        </ul>
      </div>
    );
  }
}

export default ContactMe;
