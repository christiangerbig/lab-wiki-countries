import React, {Component} from "react";
import countries from "../countries.json";
import {Link} from "react-router-dom";

class CountryDetails extends Component {

  state = {
    countries: [],
    filteredCountries: [],
    filteredBorderCountries: []
  };

  componentDidMount() {
    this.setState(
      {
      countries: countries
      }
    )
  }

  render() {
    let countryId = this.props.match.params.countryId;
    let filteredCountries = countries.filter(
      (singleCountry) => {
        return singleCountry.cca3.includes(countryId);
      }
    )
    return (
      <div className="col">
          <h2 className="text-left">{filteredCountries[0].name.common}</h2>
          <h5 className="text-left">Capital &nbsp;&nbsp;&nbsp;{filteredCountries[0].capital}</h5>
          <h5 className="text-left">Area &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{filteredCountries[0].area} km²</h5>
          <div className="row container">
            <h5>Borders</h5>
            <ul>
            {
              filteredCountries[0].borders.map(
                (borderCountryId) => {
                  let filteredBorderCountries = countries.filter(
                    (singleBorderCountry) => {
                      return singleBorderCountry.cca3.includes(borderCountryId);
                    }
                  )
                  return (
                    <div>
                      <li className="text-left">
                        <Link to={`/country/${ borderCountryId }`}>{filteredBorderCountries[0].name.common}</Link>
                      </li>
                    </div>
                  )
                }
              )
            }
            </ul>
          </div>
      </div>
    );
  }
}

export default CountryDetails;