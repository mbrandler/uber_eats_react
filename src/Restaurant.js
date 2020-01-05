import React, { Component } from 'react'

const Card = () => {
	return (
		<div className='row'>
			<div className="col-lg-4 col-sm-6 col-xs-12">
						<div className="card">
			   			{/*<img src={props.restaurant.img} className="card-img-top" alt={props.restaurant.alt}/>*/}
			 	   		<div className="card-body">
			    	 		<h5 className="card-title">Макдональдс</h5>
			     			<p className="card-text">₽₽ • Бургеры</p>
			     			<p className="card-time">Привет</p>
			    		</div>
			  		</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-xs-12">
						<div className="card">
			   			{/*<img src={props.restaurant.img} className="card-img-top" alt={props.restaurant.alt}/>*/}
			 	   		<div className="card-body">
			    	 		<h5 className="card-title">Привет</h5>
			     			<p className="card-text">Привет</p>
			     			<p className="card-time">Привет</p>
			    		</div>
			  		</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-xs-12">
						<div className="card">
			   			{/*<img src={props.restaurant.img} className="card-img-top" alt={props.restaurant.alt}/>*/}
			 	   		<div className="card-body">
			    	 		<h5 className="card-title">Привет</h5>
			     			<p className="card-text">Привет</p>
			     			<p className="card-time">Привет</p>
			    		</div>
			  		</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-xs-12">
						<div className="card">
			   			{/*<img src={props.restaurant.img} className="card-img-top" alt={props.restaurant.alt}/>*/}
			 	   		<div className="card-body">
			    	 		<h5 className="card-title">Привет</h5>
			     			<p className="card-text">Привет</p>
			     			<p className="card-time">Привет</p>
			    		</div>
			  		</div>
					</div>
				</div>
				)
}

class Restaurant extends Component {

	render () {
		return (
			
					<Card />
			)
	}
}

export default Restaurant