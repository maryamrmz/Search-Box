import React, { Component } from 'react';
import CityItem from './CityItem';

class Cities extends Component {
	render() {
		return (
			<div className='container'>
				<ul className='text-center'>
					{this.props.cities.map(city => (
						<CityItem key='city.id' city={city} />
					))}
				</ul>
			</div>
		);
	}
}

export default Cities;
