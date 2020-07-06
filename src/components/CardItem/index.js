import React from 'react';
import './style.css';

export const CardItem = props => {
	return (
		<div className='card-item'>
			<img alt='profile-pict' src={`https://robohash.org/${props.id}.png?set=set3`} width='100px' />
			<h3>{props.name}</h3>
			<h4>{props.phone}</h4>
			<p>{props.email}</p>
		</div>
	)
}