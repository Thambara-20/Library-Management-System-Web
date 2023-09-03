import React, { Component } from "react";
import ContactDetails from "../../Components/ContactDetails";
import Header from "../../Components/Header/Header";
class CustomerSuppportPage extends Component {
  state = {};
  render() {
    return (
      <div className="CustomerSupport-container">
        <Header/>
        <ContactDetails/>
      </div>
    );
  }
}

export default CustomerSuppportPage;
