import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary fixed-top">
          <div className="container-fluid">
            <span className="navbar-brand mb-0">WikiCountries</span>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
