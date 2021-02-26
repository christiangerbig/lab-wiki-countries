import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import {Route} from "react-router-dom";

class App extends Component {
  state = {
    countries: []
  };

  componentDidMount() {
    this.setState(
      {
      countries: countries
      }
    )
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <div class="container">
          <div className="row mt-5">
            <CountriesList countries={ countries }/>
            <Route path="/country/:countryId" component={ CountryDetails }/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
