import React, { Component } from "react";
import ContactDetail from "./ContactDetail";
import { contactsMap } from "../constants/Constants.jsx";
import "./ContactMe.css";

class ContactMe extends Component {
  render() {
    return (
      <div className="contact-me">
        <ul>
          {
            contactsMap.map(
              (x) => <ContactDetail type={x.type} />
            )
          }
        </ul>
      </div>
    );
  }
}

export default ContactMe;
