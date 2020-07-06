import React from 'react';
import './style.css';

export const SearchField = props => {
	return (
		<input 
			className='search-field'
			type='text'
			placeholder='Search contact'
			onChange={props.handleChange}
		/>
	)
}