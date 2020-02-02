import React from 'react'
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
					<h1 className={classes.rest_name}>{props.nameData.name}</h1>
					<p className={classes.info}>{props.nameData.text}
						<span className={classes.time}>{props.nameData.time}</span>
					</p>
					</div>
				</div>
			</div>
		)
}

export default Name