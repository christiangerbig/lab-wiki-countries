import React, { Component } from "react";
import countries from "../countries.json";

class CountryDetails extends Component {
  render() {
    let countryId = this.props.match.params.countryId;
    console.log(countryId);
    
    return (
      <div>

      </div>
    )
  }
}

export default CountryDetails;