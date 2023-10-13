import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import ContactEmail from '../../Components/ContactEmail/ContactEmail'


class CustomerSuppportPage extends Component {


  state = {};
  render() {
    return (
      <div className="CustomerSupport-container" >
        <Header/>
        <ContactEmail data-aos="fade-up"/>
      </div>
    );
  }
}

export default CustomerSuppportPage;
