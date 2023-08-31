import React, { Component } from "react";
import "../../Styles/Library.css";
import NavbarComponent from "../../Components/navbarComponent";
import MainFooter from "../../Components/footer";

class LibraryPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="header">
          <div className="div-header-main">
            <div className="div-client-and">
              <div className="div-container">
                <div className="div-pull-left-margin">
                  <img
                    className="link-picture-logo"
                    alt="Link picture logo"
                    src="link-picture-logo-png.png"
                  />
                </div>
                <div className="div-header-search">
                  <div className="link-advanced-search">Advanced Search</div>
                  <div className="form">
                    <div className="text-wrapper">Search by</div>
                    <div className="div-btn-group">
                      <div className="button">
                        <div className="span-filter-option">
                          <div className="div">Keyword</div>
                        </div>
                        <div className="text-wrapper-2"> ꯍ</div>
                      </div>
                    </div>
                    <div className="overlap-group">
                      <div className="input" />
                      <div className="div-wrapper">
                        <div className="text-wrapper-3">🔍</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-[120px] relative">
          <MainFooter />
        </div>
      </div>
    );
  }
}

export default LibraryPage;
