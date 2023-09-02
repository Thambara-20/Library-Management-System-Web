import React, { Component } from "react";
import NavbarComponent from "../../Components/NavbarComponent";
import ContactDetails from "../../Components/ContactDetails";

class CustomerSuppportPage extends Component {
  state = {};
  render() {
    return (
      <div className="CustomerSupport-container">
         <NavbarComponent/>
        <ContactDetails/>
      </div>
    );
  }
}

export default CustomerSuppportPage;
