import React, { Component } from "react";
import CustomerSupport from "../../Components/CustomerSupport";
import NavbarComponent from "../../Components/navbarComponent";
import MainFooter from "../../Components/footer";

class CustomerSuppportPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="CustomerSupport-container">
          <CustomerSupport />
        </div>
        <div className="bottom-[120px] relative">
          <MainFooter />
        </div>
      </div>
    );
  }
}

export default CustomerSuppportPage;
