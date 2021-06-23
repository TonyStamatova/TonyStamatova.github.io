import React, { Component } from "react";

class DetailsElement extends Component {
    render() {
      if(this.props.link){
        return React.createElement('a', {href: this.props.link, className:"details link-muted", target:"_blank", rel:"noopener noreferrer"}, this.props.details);
      }
      
      return React.createElement('text', {className:"details link-muted"}, this.props.details);
    }
  }

export default DetailsElement;