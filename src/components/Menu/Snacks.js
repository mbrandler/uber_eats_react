import React from 'react'
import { connect } from 'react-redux'
import classes from './Snacks.module.css'
import {addToCart} from '../actions/cartActions.js'

const Snacks = props => {
	console.log('snacks', props)

	const handleClick = (id) => {
		props.addToCart(id);
		console.log('afterCleck', props.menu.addedSnacks)
	}
	const snacks = props.snackData.map((snack) => {
		return (
			<div className='col-lg-6 col-md-12 col-sm-12' key={snack.id}>
				<div className="card mb-3">
				  <div className="row no-gutters">
				    
				    <div className="col-md-8 col-sm-4 col-xs-8">
				      <div className="card-body">
				        <h5 className={classes.title}>{snack.name}</h5>
				        {/*<p className="card-text">{snack.text}</p>*/}
				        <p className={classes.price}>{snack.price}</p>
				        <button onClick={() => {handleClick(snack.id)}}>Заказать</button> 
				      </div>
				    </div>

				    <div className="col-md-4 col-sm-4 col-xs-4" >
				      <img src={snack.img} className="card-img" alt={snack.alt} />
				    </div>

				  </div>
				</div>
			</div>
		)
	})

	return <div className='row'>{snacks}</div>
}

const mapStateToProps = (state) => {
	return {
	  menu: state.snacksReducer,
	}
}

const mapDispatchToProps= (dispatch) => {
	return{
	  addToCart: (id) => {dispatch(addToCart(id))}
	}
}


export default connect(mapStateToProps, mapDispatchToProps) (Snacks)
