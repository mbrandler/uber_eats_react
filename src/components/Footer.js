import React from 'react'
import classes from './Footer.module.css'
import logo from '../img/logo.svg'

const Footer = () => {
	return (
			<div className={classes.footer}>
				<div className="container">
					<img className={classes.logo} src={logo} />

					<hr />


					<div>
						<p>Об UberEats</p>
						<p>Станьте партнёром по доставке</p>
						<p>Станьте партнёром-рестораном</p>
					</div>

					<div>
						<p>Все города</p>
						<p>Цены</p>
						<p>Помощь</p>
						<p>FAQs</p>
					</div>
				</div>
			</div>
		)
}


export default Footer