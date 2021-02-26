import React, { Component } from "react";
import { Link } from "react-router-dom";

class CountriesList extends Component {
	render() {
		const {countries} = this.props;
		return (
			<div className="col">
				<ul className="list-group">
					{
						countries.map(
							(country, index) => {
								return (
									<li className="list-group-item" key={ index }>
										<Link to={`/country/${ country.cca3 }`}>{ country.name.common }</Link>
									</li>
								)
							}
						)
					}
				</ul>
			</div>
		)
	}
}

export default CountriesList;