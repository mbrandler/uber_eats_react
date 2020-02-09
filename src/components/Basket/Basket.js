import React from 'react'
import classes from './Basket.module.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {addToCart, subFromCart, removeItem} from '../actions/cartActions.js'
import plus from '../../img/plus.svg'
import minus from '../../img/dash.svg'
import delete_btn from '../../img/x.svg'

const Basket = props => {
	const handleClick = (id) => {
	    props.addToCart(id); 
	 }

	const handleRemove = (id)=>{
      props.removeItem(id);
  }
   
  const handleSubtractQuantity = (id)=>{
      props.subFromCart(id);
  }

	const addedSnacks = props.snacks.length ?
    (  
      props.snacks.map(snack => {
        return(
        	<div>
        		<div className='row' key={snack.id}>
        		
	    				<div className='col-lg-1'>
	    					<img src={delete_btn} onClick={() => {handleRemove(snack.id)}}/>
	    				</div>
						      	
						  <div className='col-lg-2'>
						  	<div className={classes.image}>
						  		<img src={snack.img}/>
						  	</div>
						  </div>

						  <div className='col-lg-6'>
						  	{snack.name}
						  </div>

						  <div className='col-lg-2'>
						  	<img src={plus} alt="" width="32" height="32" title="plus"
										onClick={() => {handleClick(snack.id)}}
										/>
										{snack.quantity}
										<img src={minus} alt="" width="32" height="32" title="minus"
											onClick={() => {handleSubtractQuantity(snack.id)}}
										/>
						  </div>

						  <div className='col-lg-1'>
						  	{snack.price * snack.quantity} руб.
						  </div>
	        		
						</div>
						<hr className={classes.blackHr}/>

        	</div>
        	
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
						{addedSnacks}  	          
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