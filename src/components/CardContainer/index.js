import React from 'react';
import './style.css';

export const CardContainer = props => {
	return (
		<div className='card-container'>
			{props.children}
		</div>
	)
}