import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'react-persian-datepicker';

export class Search extends Component {
	state = {
		text: ''
	};

	static propTypes = {
		searchCities: PropTypes.func.isRequired
	};

	onSubmit = e => {
		e.preventDefault();
		this.props.searchCities(this.state.text);
		this.setState({ text: '' });
	};

	onChange = e => this.setState({ text: e.target.value });

	render() {
		const styles = {
			calendarContainer: 'calendarContainer',
			dayPickerContainer: 'dayPickerContainer',
			monthsList: 'monthsList',
			daysOfWeek: 'daysOfWeek',
			dayWrapper: 'dayWrapper',
			selected: 'selected',
			heading: 'heading'
		};
		return (
			<div>
				<form onSubmit={this.onSubmit} className='form'>
					<div className='mt-5 form-row align-items-center'>
						<div className='col-6'>
							<input
								className='text-center'
								type='text'
								name='text'
								placeholder='شهـــر'
								value={this.state.text}
								onChange={this.onChange}
							/>
						</div>
						<div className='col-2'>
							<DatePicker
								placeholder='از تاریخ'
								calendarStyles={styles}
							/>
						</div>
						<div className='col-2'>
							<DatePicker
								placeholder='تا تاریخ'
								calendarStyles={styles}
							/>
						</div>
						<div className='col-1'>
							<input
								type='submit'
								value='جستجــو'
								className='btn btn-primary'
							/>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Search;
