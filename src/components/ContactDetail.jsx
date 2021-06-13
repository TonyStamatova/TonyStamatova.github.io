import React, { Component } from "react";
import DetailsElement from "./DetailsElement";

class ContactDetail extends Component {
  render() {
    let className = "fa fa-" + this.props.type;

    return (
      <div className="contactDetail">
        <span className={className}></span>
        <DetailsElement link={this.props.link} details={this.props.details}/>
      </div>
    );
  }
}

export default ContactDetail;
