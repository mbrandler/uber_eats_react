import React from 'react'
import classes from './Name.module.css'


const Name = props => {
	let restaurantData = props.restaurantData
	return (
		<div className={classes.name}>
			<img  className={classes.background} src={restaurantData.background} alt="restaurant's food" />
			<div className='container'>
				<div className={classes.restaurant_card}>
				<h1 className={classes.rest_name}>{restaurantData.name}</h1>
				<p className={classes.info}>{restaurantData.text}
					<span className={classes.time}>{restaurantData.time}</span>
				</p>
				</div>
			</div>
		</div>
	)
}

export default Name