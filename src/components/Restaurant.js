import React, { Component } from 'react'


const Card = props => {

	const cards = props.restaurantData.map((card, index) => {

		return (
			<div className="col-lg-4 col-sm-6 col-xs-12" key={index}>
				<div className="card">
				
   			<img src={card.img} className="card-img-top" alt={card.alt}/>
	 	   		<div className="card-body">
	    	 		<h5 className="card-title">{card.name}</h5>
	     			<p className="card-text">{card.text}</p>
	     			<p className="card-time">{card.time}</p>
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
					
					<Card restaurantData={this.props.restaurantData} />
					
			)
	}
}

export default Restaurant