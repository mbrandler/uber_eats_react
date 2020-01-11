import React, {Component} from 'react'
import classes from './Name.module.css'


const Name = props => {
	console.log('name props', props.nameData)
	return (
			<div className={classes.name}>
				<img className={classes.background} src={props.nameData.img} alt="restaurant's food" />
				<div className={classes.restaurant_card}>
					<h1>{props.nameData.text}</h1>
				</div>
			</div>
		)
}

export default Name