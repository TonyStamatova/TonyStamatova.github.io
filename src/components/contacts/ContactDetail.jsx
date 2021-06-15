import React, { Component } from "react";
import DetailsElement from "./DetailsElement";
import { contactsMap } from "../../constants/Constants.jsx";

class ContactDetail extends Component {
  render() {
    let className = "fa fa-" + this.props.type;
    let detailsObject = contactsMap.filter(x => x.type === this.props.type)[0];

    return (
      <li className="contactDetail">
        <span className={className}></span>
        <DetailsElement link={detailsObject.link} details={detailsObject.details}/>
      </li>
    );
  }
}

export default ContactDetail;
