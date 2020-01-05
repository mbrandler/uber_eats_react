import React, { Component } from 'react'
import classes from './Restaurant.module.css'


const Card = props => {

	const cards = props.restaurantData.map((card, index) => {

		return (
			<div className="col-lg-4 col-sm-6 col-xs-12" key={index}>
				<div className={classes.card}>
				
   			<img src={card.img} className="card-img-top" alt={card.alt}/>
	 	   		<div className="card-body">
	    	 		<h5 className={classes.card_title}>{card.name}</h5>
	     			<p className={classes.card_text}>{card.text}</p>
	     			<p className={classes.card_time}>{card.time}</p>
	    		</div>
	  		</div>
			</div>
		)
	})
	return <div className='row'>{cards}</div>
}



class Restaurant extends Component {

	render () {
		return (
					<div className='container'>
						<Card restaurantData={this.props.restaurantData} />
					</div>
			)
	}
}

export default Restaurant