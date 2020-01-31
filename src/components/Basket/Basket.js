import React from 'react'
import classes from './Basket.module.css'

const Basket = () => {
	return (
			<div className={classes.basket2}>
				<h1>Мой заказ</h1>
				{/* выбранные позиции */}
			<h2>Итого: {/* сумма */} руб.</h2>
			</div>
		)
}

export default Basket