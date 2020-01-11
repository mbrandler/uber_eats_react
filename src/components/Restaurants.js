import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classes from './Restaurants.module.css'
import { connect } from 'react-redux'
import Menu from './Menu/Menu.js'


const Card = props => {

	const cards = props.restaurantData.map((card, index) => {

		return (
			<Link to="/menu" className="col-lg-4 col-sm-6 col-xs-12" key={index}>
				<div className={classes.card}>
			
   			<img src={card.img} className="card-img-top" alt={card.alt}/>
	 	   		<div className="card-body">
	    	 		<h5 className={classes.card_title}>{card.name}</h5>
	     			<p className={classes.card_text}>{card.text}</p>
	     			<p className={classes.card_time}>{card.time}</p>
	    		</div>
	  		</div>
			</Link>
		)
	})
	return <div className='row'>{cards}</div>
}


class Restaurants extends Component {

	render () {
		console.log("1", this.props);
		return (
					<div className='container'>
						<input type="text" class="search-form" placeholder="Поиск по ресторанам и кухням" />
          	<h1>Рестораны в Москве</h1>
						<Card restaurantData={this.props.restaurantData} />
					</div>
			)
	}
}


const mapStateToProps = (state)=>{
return {
    restaurantData: state.restaurantReducer.restaurantData
     }
}

export default connect(mapStateToProps) (Restaurants)