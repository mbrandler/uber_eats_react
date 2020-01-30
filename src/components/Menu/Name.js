import React, {Component} from 'react'
import classes from './Name.module.css'


const Name = props => {
	console.log('name props', props.nameData)
	return (
			<div className={classes.name}>
				<div className={classes.background}>
					<img  src={props.nameData.img} alt="restaurant's food" />
				</div>
				<div className='container'>
					<div className={classes.restaurant_card}>
					<h1>{props.nameData.name}</h1>
					<p>{props.nameData.text}</p>
					<span className={classes.time}>{props.nameData.time}</span>
					</div>
				</div>
			</div>
		)
}

export default Name