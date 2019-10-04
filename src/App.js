import React, { Component } from 'react';
import Cities from './components/cities/Cities';
import Search from './components/cities/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
	state = {
		cities: [],
		loading: false
	};

	// Search API cities
	searchCities = async text => {
		this.setState({ loading: true });
		const url = `http://api.dev.fastreserve.net/v1/cities/${text}`;
		const res = await axios.request({
			url: url,
			method: 'get',
			headers: {
				'Client-Token':
					'$2y$10$VXF2k/LK6NEF8fEQ1wdnhunqsPNsRX2Y.p782CKGdA00vhPNiz.By'
			}
		});
		this.setState({ cities: res.data.value.cities, loading: false });
	};

	render() {
		return (
			<div className='App'>
				<div className='container'>
					<Search searchCities={this.searchCities} />
					<Cities
						cities={this.state.cities}
						loading={this.state.loading}
					/>
				</div>
			</div>
		);
	}
}

export default App;
