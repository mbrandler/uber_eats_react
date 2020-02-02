import React from 'react'
import classes from './Basket.module.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {addToCart, subFromCart, removeItem} from '../actions/cartActions.js'
import plus from '../../img/plus.svg'
import minus from '../../img/dash.svg'

const Basket = props => {
	const handleClick = (id) => {
	    props.addToCart(id); 
	 }

	// const handleRemove = (id)=>{
 //      props.removeItem(id);
 //  }
   
  const handleSubtractQuantity = (id)=>{
      props.subFromCart(id);
  }

	const addedSnacks = props.snacks.length ?
    (  
      props.snacks.map(snack => {
        return(
					<li className="card mb-3" key={snack.id}>
					  <div className="row no-gutters">

					    <div className="col-md-4">
					      <img src={snack.img} className="card-img" alt={snack.alt} />
					    </div>

					    <div className="col-md-8">
					      <div className="card-body">
					        <h5 className="card-title">{snack.name}</h5>
									<p className={classes.price}>{snack.price}</p>
									<img src={plus} alt="" width="32" height="32" title="plus"
										onClick={() => {handleClick(snack.id)}}
									/>
									<p>Количество: {snack.quantity}</p>
									<img src={minus} alt="" width="32" height="32" title="minus"
										onClick={() => {handleSubtractQuantity(snack.id)}}
									/>
					      </div>
					    </div>

					  </div>
					</li>
				)
      })
    ):
	    (
	    	<p>Пусто</p>
	    )

  return(
    <div className="container">
        <div className={classes.basket2}>
					<h1>Ваш заказ</h1>
					<ul className="collection">
              {addedSnacks}
          </ul>
					<h2>Итого: {props.total} руб.</h2>
			</div>
    </div>
 	)
}

const mapStateToProps = (state)=>{
    return{
        snacks: state.snacksReducer.addedSnacks,
        total: state.snacksReducer.total
    }
}

const mapDispatchToProps = (dispatch)=>{
	return{
		addToCart: (id)=>{dispatch(addToCart(id))},
		subFromCart: (id)=>{dispatch(subFromCart(id))},
		removeItem: (id)=>{dispatch(removeItem(id))}
	}
}
        
    

export default connect(mapStateToProps, mapDispatchToProps) (Basket)