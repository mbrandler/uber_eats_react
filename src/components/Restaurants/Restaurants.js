import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classes from './Restaurants.module.css'
import { connect } from 'react-redux'

const Card = props => {

	const cards = props.restaurantData.map((card) => {
		return (
			<Link to={"/menu/" + card.id} className="col-lg-4 col-sm-6 col-xs-12" key={card.id}>
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
		return (
			<div className='container'>
				<input type="text" className="search-form" placeholder="Поиск по ресторанам и кухням" onType/>
      	<h1 className={classes.rest}>Рестораны в Москве</h1>
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