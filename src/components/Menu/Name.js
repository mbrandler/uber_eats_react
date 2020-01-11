import React, {Component} from 'react'
import classes from './Name.module.css'
import pushkin from '../../img/Uber Eats/Restaurant/pushkin.png'

const Name = () => {
	return (
			<div className={classes.name}>
				<img className={classes.background} src={pushkin} alt="restaurant's food" />
				<div className={classes.restaurant_card}>
					<h1 className={classes.heading}>Трактир «Пушкин»</h1>
				</div>
			</div>
		)
}

export default Name