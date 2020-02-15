import React from 'react'
import { connect } from 'react-redux'
import classes from './Snacks.module.css'
import {addToCart} from '../actions/cartActions.js'
import plus from '../../img/plus.svg'

import { useToasts } from 'react-toast-notifications';


const Snacks = props => {
	const { addToast } = useToasts()

	const handleClick = (id) => {
		props.addToCart(id);
		addToast('Добавлено в корзину 1 шт: ' + props.snackData.find(item => id === item.id).name , {
      appearance: 'success',
      autoDismiss: true,
    })
	}
	const snacks = props.snackData.map((snack) => {
		return (
			<div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' key={snack.id}>
			
				<div className="card mb-3">
				  <div className="row no-gutters">
				    
				    <div className="col-md-8 col-sm-8 col-xs-8">
				    	
				      <div className="card-body">
				        <h5 className={classes.title}>{snack.name}</h5>
				        {/*<p className="card-text">{snack.text}</p>*/}
				        <div className='row'>
					    		<div className='col-6'>
					    			<p className={classes.price}>{snack.price} ₽</p>
					    		</div>

					    		<div className='col-6'>
					    			<img src={plus} alt="" className={classes.add_btn} width="40" height="40" title="Добавить в корзину" onClick={() => {handleClick(snack.id)}}/>
					    		</div>
					    		
					    	</div>

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
