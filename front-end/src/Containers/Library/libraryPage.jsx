import React, { Component } from "react";
import '../../Styles/Library.css';

class LibraryPage extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <div className="div-header-main">
          <div className="div-client-and">
            <div className="div-container">
              <div className="div-pull-left-margin">
                <img className="link-picture-logo" alt="Link picture logo" src="link-picture-logo-png.png" />
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
    );}}

export default LibraryPage;
