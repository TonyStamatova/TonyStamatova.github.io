import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { contactsMap } from "../../constants/Constants.jsx";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer-content">
          {
            contactsMap.map((x) => {
                var className = "fa fa-" + x.type;

                if(x.link){
                  return React.createElement('a', {href: x.link, className: className, target:"_blank", rel:"noopener noreferrer"});
                }

                return <NavLink to="/contactMe"><span className = {className}></span></NavLink>
              })
          }
      </div>
    );
  }
}

export default Footer; 